import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";

export default class ChatMessageContentDisplayGroup extends DomNode {
  public children: ChatMessageContentDisplay[] = [];

  constructor(
    private contentDisplayManager: ChatMessageContentDisplayManager,
    messages: ChatMessage[],
  ) {
    super(".chat-message-content-display-group");
    for (const message of messages) {
      this.addMessage(message);
    }
  }

  public addMessage(message: ChatMessage) {
    const contentDisplay = new ChatMessageContentDisplay(message);
    contentDisplay.on("remove", () => {
      if (this.children.length === 0) {
        this.remove();
      }
    });
    this.contentDisplayManager.setContentDisplay(message.id, contentDisplay);
  }
}
