import { DomNode, el } from "@common-module/app";
export default class ChatContentListItem extends DomNode {
    message;
    contentDisplay;
    constructor(message) {
        super("li.chat-content-list-item");
        this.message = message;
        this.append(this.contentDisplay = el("p.content", message.content));
    }
    getMessageId() {
        return this.message.id;
    }
    updateMessage(message) {
        this.contentDisplay.text = message.content;
    }
    addChunk(chunk) {
        this.contentDisplay.append(chunk);
    }
}
//# sourceMappingURL=ChatContentListItem.js.map