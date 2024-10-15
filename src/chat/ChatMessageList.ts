import { DomNode } from "@common-module/app";
import Author from "../author/Author.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";

export default class ChatMessageList extends DomNode {
  private contentDisplayManager = new ChatMessageContentDisplayManager();

  public children: ChatMessageListItem[] = [];

  constructor(messageGroups: ChatMessageGroup[]) {
    super("ul.chat-message-list");
    this.append(
      ...messageGroups.map((messageGroup) =>
        new ChatMessageListItem(this.contentDisplayManager, messageGroup)
      ),
    );
  }

  public addMessage(author: Author, message: ChatMessage) {
    if (this.children.length === 0) {
      this.append(
        new ChatMessageListItem(
          this.contentDisplayManager,
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
            this.contentDisplayManager,
            { author, messages: [message] },
          ),
        );
      }
    }
  }

  public editMessage(messageId: number, newContent: string) {
    this.contentDisplayManager.editMessage(messageId, newContent);
  }

  public deleteMessage(messageId: number) {
    this.contentDisplayManager.deleteMessage(messageId);
  }
}
