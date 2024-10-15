import { DomNode, el } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";

export default class ChatMessageContentDisplay extends DomNode {
  private contentDisplay: DomNode<HTMLParagraphElement>;

  constructor(message: ChatMessage) {
    super(`.chat-message-content-display${message.isEdited ? ".edited" : ""}`);
    this.append(
      this.contentDisplay = el("p", message.content),
    );
  }

  public editContent(newContent: string) {
    this.contentDisplay.text = newContent;
    this.addClass("edited");
  }

  public startEditMode() {
    this.addClass("editing");
  }

  public endEditMode(save: boolean = true) {
    this.removeClass("editing");
  }
}
