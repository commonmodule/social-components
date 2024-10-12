import { DomNode, el } from "@common-module/app";
import AuthorDisplay from "../author/AuthorDisplay.js";
export default class ChatMessageListItem extends DomNode {
    constructor(message) {
        super("li.chat-message-list-item");
        this.append(el(".author", new AuthorDisplay(message.author)), el(".content", el("p", message.content)));
    }
}
//# sourceMappingURL=ChatMessageListItem.js.map