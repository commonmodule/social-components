import { DomNode } from "@common-module/app";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    messageManager;
    messageGroup;
    children = [];
    constructor(messageManager, messageGroup) {
        super(".chat-message-content-display-group");
        this.messageManager = messageManager;
        this.messageGroup = messageGroup;
        for (const message of messageGroup.messages) {
            this.addMessage(message);
        }
    }
    addMessage(message) {
        const contentDisplay = new ChatMessageContentDisplay(this.messageManager, this.messageGroup.author.id, message).appendTo(this).on("remove", () => {
            if (this.children.length === 0) {
                this.remove();
            }
        });
        this.messageManager.setContentDisplay(message.id, contentDisplay);
    }
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.js.map