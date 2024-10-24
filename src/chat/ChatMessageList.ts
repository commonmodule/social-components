import { DomNode } from "@common-module/app";
import User from "../user/User.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
import ChatMessageManager, { MessageActions } from "./ChatMessageManager.js";

export default class ChatMessageList extends DomNode {
  private messageManager: ChatMessageManager;
  private fontLoadingPromise: Promise<void>;
  private isScrolling = false;

  public children: ChatMessageListItem[] = [];

  constructor(messageGroups: ChatMessageGroup[], actions: MessageActions) {
    super("ul.chat-message-list");

    this.messageManager = new ChatMessageManager(actions);

    this.append(
      ...messageGroups.map((messageGroup) =>
        new ChatMessageListItem(this.messageManager, messageGroup)
      ),
    );

    this.fontLoadingPromise = this.waitForFontsToLoad();

    // Initial scroll to bottom
    this.scrollToBottom();
  }

  private async waitForFontsToLoad(): Promise<void> {
    if ("fonts" in document) {
      try {
        // Wait for all fonts to load
        await document.fonts.ready;
      } catch (error) {
        console.error("Error loading fonts:", error);
        // Fallback in case of error
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } else {
      // Fallback for browsers that don't support document.fonts
      console.warn("document.fonts not supported. Using fallback timeout.");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  public addMessage(author: User, message: ChatMessage) {
    if (this.children.length === 0) {
      this.append(
        new ChatMessageListItem(
          this.messageManager,
          { author, messages: [message] },
        ),
      );
    } else {
      const lastItem = this.children[this.children.length - 1];
      if (lastItem.authorId === author.id) {
        lastItem.addMessage(message);
      } else {
        this.append(
          new ChatMessageListItem(
            this.messageManager,
            { author, messages: [message] },
          ),
        );
      }
    }

    // Scroll to bottom after adding a new message
    this.scrollToBottom();
  }

  public editMessage(messageId: number, newContent: string) {
    this.messageManager.editMessage(messageId, newContent);
  }

  public deleteMessage(messageId: number) {
    this.messageManager.deleteMessage(messageId);
  }

  private async scrollToBottom(): Promise<void> {
    if (this.isScrolling) return;

    this.isScrolling = true;

    try {
      // Immediate scroll
      this.performScroll();

      // Wait for fonts and scroll again
      await this.fontLoadingPromise;
      this.performScroll();
    } finally {
      this.isScrolling = false;
    }
  }

  private performScroll(): void {
    // Use requestAnimationFrame to ensure the DOM has updated before scrolling
    requestAnimationFrame(() => {
      this.htmlElement.scrollTop = this.htmlElement.scrollHeight;
    });
  }
}
