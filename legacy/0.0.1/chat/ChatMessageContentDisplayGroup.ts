import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageManager from "./ChatMessageManager.js";

export default class ChatMessageContentDisplayGroup extends DomNode {
  public children: ChatMessageContentDisplay[] = [];

  constructor(
    private messageManager: ChatMessageManager,
    private messageGroup: ChatMessageGroup,
  ) {
    super(".chat-message-content-display-group");
    for (const message of messageGroup.messages) {
      this.addMessage(message);
    }
  }

  public addMessage(message: ChatMessage) {
    const contentDisplay = new ChatMessageContentDisplay(
      this.messageManager,
      this.messageGroup.author.id,
      message,
    ).appendTo(this).on("remove", () => {
      if (this.children.length === 0) {
        this.remove();
      }
    });

    this.messageManager.setContentDisplay(message.id, contentDisplay);
  }
}
