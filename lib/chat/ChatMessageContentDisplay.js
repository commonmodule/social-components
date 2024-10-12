import { DomNode } from "@common-module/app";
export default class ChatMessageContentDisplay extends DomNode {
    constructor(message) {
        super("p.chat-message-content-display");
        this.text = message.content;
    }
}
//# sourceMappingURL=ChatMessageContentDisplay.js.map