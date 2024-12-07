import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageListItem from "./ChatMessageListItem.js";

export default class ChatMessageList extends DomNode {
  public children: ChatMessageListItem[] = [];

  constructor(messages: ChatMessage[]) {
    super("ul.chat-message-list");
    for (const message of messages) {
      this.addMessage(message);
    }
  }

  public addMessage(message: ChatMessage) {
    const lastItem = this.children[this.children.length - 1];
    if (
      lastItem && lastItem.getSender() === message.sender &&
      (new Date(message.createdAt).getTime() -
          new Date(lastItem.getLastCreatedAt()).getTime()) < 60000
    ) {
      lastItem.addMessage(message);
    } else {
      this.append(new ChatMessageListItem(message));
    }
  }

  public updateMessage(message: ChatMessage) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(message.id)
    );
    item?.updateMessage(message);
  }

  public removeMessage(messageId: number) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(messageId)
    );
    item?.removeMessage(messageId);
  }

  public addChunk(messageId: number, chunk: string) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(messageId)
    );
    item?.addChunk(messageId, chunk);
  }
}
