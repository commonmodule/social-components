import { DomNode } from "@common-module/app";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    messageManager;
    children = [];
    constructor(messageManager, messages) {
        super(".chat-message-content-display-group");
        this.messageManager = messageManager;
        for (const message of messages) {
            this.addMessage(message);
        }
    }
    addMessage(message) {
        const contentDisplay = new ChatMessageContentDisplay(message);
        contentDisplay.on("remove", () => {
            if (this.children.length === 0) {
                this.remove();
            }
        });
        this.messageManager.setContentDisplay(message.id, contentDisplay);
    }
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.js.map