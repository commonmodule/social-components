import { DomNode, el } from "@common-module/app";
export default class ChatMessageContentDisplay extends DomNode {
    contentDisplay;
    constructor(message) {
        super(`.chat-message-content-display${message.isEdited ? ".edited" : ""}`);
        this.append(this.contentDisplay = el("p", message.content));
    }
    editContent(newContent) {
        this.contentDisplay.text = newContent;
        this.addClass("edited");
    }
    startEditMode() {
        this.addClass("editing");
    }
    endEditMode(save = true) {
        this.removeClass("editing");
    }
}
//# sourceMappingURL=ChatMessageContentDisplay.js.map