import { Dom } from "@commonmodule/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageListItem from "./ChatMessageListItem.js";

export default class ChatMessageList extends Dom {
  public children: ChatMessageListItem[] = [];

  constructor(messages?: ChatMessage[]) {
    super("ul.chat-message-list");
    if (messages) this.setMessages(messages);
  }

  public setMessages(messages: ChatMessage[]) {
    this.clear();
    for (const message of messages) {
      this.addMessage(message);
    }
  }

  public addMessage(message: ChatMessage) {
    const lastItem = this.children[this.children.length - 1];
    if (
      lastItem && lastItem.getSender() === message.author &&
      (new Date(message.createdAt).getTime() -
          new Date(lastItem.getLastCreatedAt()).getTime()) < 60000
    ) {
      lastItem.addMessage(message);
    } else {
      this.append(new ChatMessageListItem(message));
    }
  }

  public updateMessage(messageId: string, message: ChatMessage) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(messageId)
    );
    item?.updateMessage(messageId, message);
  }

  public removeMessage(messageId: string) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(messageId)
    );
    item?.removeMessage(messageId);
  }

  public addChunk(messageId: string, chunk: string) {
    const item = this.children.find((item) =>
      item.getMessageIds().includes(messageId)
    );
    item?.addChunk(messageId, chunk);
  }
}
