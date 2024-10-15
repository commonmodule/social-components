import { DomNode, DomUtils } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageManager from "./ChatMessageManager.js";
import ChatMessageMenu from "./ChatMessageMenu.js";

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
    const contentDisplay = new ChatMessageContentDisplay(message).appendTo(
      this,
    );
    contentDisplay.on("remove", () => {
      if (this.children.length === 0) {
        this.remove();
      }
    });

    DomUtils.enhanceWithContextMenu(
      contentDisplay,
      (event) =>
        new ChatMessageMenu(event.clientX, event.clientY, {
          messageManager: this.messageManager,
          author: this.messageGroup.author.id,
          messageId: message.id,
          onEdit: () => contentDisplay.startEditMode(),
        }),
    );

    this.messageManager.setContentDisplay(message.id, contentDisplay);
  }
}
