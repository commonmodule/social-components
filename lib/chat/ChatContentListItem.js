import { DomNode, el } from "@common-module/app";
import { marked } from "marked";
export default class ChatContentListItem extends DomNode {
    message;
    contentDisplay;
    constructor(message) {
        super(`li.chat-content-list-item${message.isTemp ? ".temp" : ""}`);
        this.message = message;
        this.append(this.contentDisplay = el(".content.markdown-body"));
        if (message.content) {
            this.contentDisplay.htmlElement.innerHTML = marked(message.content);
        }
    }
    getMessageId() {
        return this.message.id;
    }
    updateMessage(message) {
        this.message = message;
        this.contentDisplay.text = message.content;
        message.isTemp ? this.addClass("temp") : this.removeClass("temp");
    }
    addChunk(chunk) {
        this.contentDisplay.append(chunk);
    }
}
//# sourceMappingURL=ChatContentListItem.js.map