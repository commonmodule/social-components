import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";

export default class ChatContentListItem extends DomNode {
  constructor(message: ChatMessage) {
    super("li.chat-content-list-item");
    this.append(JSON.stringify(message));
  }
}
