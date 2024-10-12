import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";

export default class ChatMessageContentDisplay extends DomNode {
  constructor(message: ChatMessage) {
    super("p.chat-message-content-display");
    this.text = message.content;
  }
}
