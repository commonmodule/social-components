import { DomNode } from "@common-module/app";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    constructor(messages) {
        super(".chat-message-content-display-group");
        this.append(...messages.map((message) => new ChatMessageContentDisplay(message)));
    }
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.js.map