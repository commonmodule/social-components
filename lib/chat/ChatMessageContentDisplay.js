import { DomNode, DomUtils, el } from "@common-module/app";
import ChatMessageEditForm from "./ChatMessageEditForm.js";
import ChatMessageMenu from "./ChatMessageMenu.js";
export default class ChatMessageContentDisplay extends DomNode {
    messageManager;
    message;
    contentDisplay;
    editForm;
    constructor(messageManager, authorId, message) {
        super(`.chat-message-content-display${message.isEdited ? ".edited" : ""}`);
        this.messageManager = messageManager;
        this.message = message;
        this.append(this.contentDisplay = el("p", message.content));
        DomUtils.enhanceWithContextMenu(this, (event) => {
            new ChatMessageMenu(event.clientX, event.clientY, {
                messageManager: this.messageManager,
                author: authorId,
                messageId: message.id,
                onEdit: () => this.startEditMode(),
            });
        });
    }
    editContent(newContent) {
        this.contentDisplay.text = newContent;
        this.addClass("edited");
    }
    startEditMode() {
        this.addClass("editing");
        this.editForm = new ChatMessageEditForm(this.message.content ?? "", (newMessage) => {
            this.messageManager.actions.onEdit(this.message.id, newMessage);
            this.endEditMode();
        }).appendTo(this);
    }
    endEditMode(save = true) {
        this.removeClass("editing");
    }
}
//# sourceMappingURL=ChatMessageContentDisplay.js.map