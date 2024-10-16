import { DomNode, DomUtils, el } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageEditForm from "./ChatMessageEditForm.js";
import ChatMessageManager from "./ChatMessageManager.js";
import ChatMessageMenu from "./ChatMessageMenu.js";

export default class ChatMessageContentDisplay extends DomNode {
  private contentDisplay: DomNode<HTMLParagraphElement>;
  private editForm: ChatMessageEditForm | undefined;

  constructor(
    private messageManager: ChatMessageManager,
    authorId: string,
    private message: ChatMessage,
  ) {
    super(`.chat-message-content-display${message.isEdited ? ".edited" : ""}`);
    this.append(
      this.contentDisplay = el("p", message.content),
    );

    DomUtils.enhanceWithContextMenu(this, (event) => {
      new ChatMessageMenu(event.clientX, event.clientY, {
        messageManager: this.messageManager,
        author: authorId,
        messageId: message.id,
        onEdit: () => this.startEditMode(),
      });
    });
  }

  public editContent(newContent: string) {
    this.contentDisplay.text = newContent;
    this.addClass("edited");
  }

  public startEditMode() {
    this.addClass("editing");

    this.editForm = new ChatMessageEditForm(
      this.message.content,
      (newMessage) => {
        this.messageManager.actions.onEdit(this.message.id, newMessage);
        this.endEditMode();
      },
    ).appendTo(this);
  }

  public endEditMode(save: boolean = true) {
    this.removeClass("editing");
  }
}
