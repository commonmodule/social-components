import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";

export default class ChatMessageContentDisplayGroup extends DomNode {
  constructor(messages: ChatMessage[]) {
    super(".chat-message-content-display-group");
    this.append(
      ...messages.map((message) => new ChatMessageContentDisplay(message)),
    );
  }
}
