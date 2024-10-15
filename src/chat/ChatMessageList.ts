import { DomNode } from "@common-module/app";
import Author from "../author/Author.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageManager from "./ChatMessageManager.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";

export default class ChatMessageList extends DomNode {
  private messageManager: ChatMessageManager;

  public children: ChatMessageListItem[] = [];

  constructor(
    messageGroups: ChatMessageGroup[],
    executeEdit: (messageId: number, newContent: string) => Promise<void>,
    executeDelete: (messageId: number) => Promise<void>,
  ) {
    super("ul.chat-message-list");

    this.messageManager = new ChatMessageManager(executeEdit, executeDelete);

    this.append(
      ...messageGroups.map((messageGroup) =>
        new ChatMessageListItem(this.messageManager, messageGroup)
      ),
    );
  }

  public addMessage(author: Author, message: ChatMessage) {
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
  }

  public editMessage(messageId: number, newContent: string) {
    this.messageManager.editMessage(messageId, newContent);
  }

  public deleteMessage(messageId: number) {
    this.messageManager.deleteMessage(messageId);
  }
}
