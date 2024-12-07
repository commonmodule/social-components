import { DomNode } from "@common-module/app";
import ChatContentListItem from "./ChatContentListItem.js";
import ChatMessage from "./ChatMessage.js";

export default class ChatContentList extends DomNode {
  public children: ChatContentListItem[] = [];

  constructor() {
    super("ul.chat-content-list");
  }

  public addMessage(message: ChatMessage) {
    this.append(new ChatContentListItem(message));
  }
}
