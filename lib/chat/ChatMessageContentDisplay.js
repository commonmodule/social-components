import { DomNode } from "@common-module/app";
export default class ChatMessageContentDisplay extends DomNode {
    constructor(message) {
        super(`p.chat-message-content-display${message.isEdited ? ".edited" : ""}`);
        this.text = message.content;
    }
    editContent(newContent) {
        this.text = newContent;
        this.addClass("edited");
    }
}
//# sourceMappingURL=ChatMessageContentDisplay.js.map