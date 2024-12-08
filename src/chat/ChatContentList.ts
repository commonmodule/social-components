import { DomNode } from "@common-module/app";
import ChatContentListItem from "./ChatContentListItem.js";
import ChatMessage from "./ChatMessage.js";

export default class ChatContentList extends DomNode {
  public children: ChatContentListItem[] = [];

  constructor(firstMessage: ChatMessage) {
    super("ul.chat-content-list");
    this.addMessage(firstMessage);
  }

  public addMessage(message: ChatMessage) {
    this.append(new ChatContentListItem(message));
  }

  public updateMessage(messageId: string, message: ChatMessage) {
    const item = this.children.find((item) =>
      item.getMessageId() === messageId
    );
    item?.updateMessage(message);
  }

  public removeMessage(messageId: string) {
    const item = this.children.find((item) =>
      item.getMessageId() === messageId
    );
    item?.remove();
  }

  public addChunk(messageId: string, chunk: string) {
    const item = this.children.find((item) =>
      item.getMessageId() === messageId
    );
    item?.addChunk(chunk);
  }
}
