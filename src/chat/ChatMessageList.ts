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
      lastItem && lastItem.sender === message.sender &&
      (new Date(message.createdAt).getTime() -
          new Date(lastItem.lastCreatedAt).getTime()) < 60000
    ) {
      lastItem.addMessage(message);
    } else {
      this.append(new ChatMessageListItem(message));
    }
  }
}
