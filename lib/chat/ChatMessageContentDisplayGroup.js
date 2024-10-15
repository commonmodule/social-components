import { DomNode } from "@common-module/app";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    contentDisplayManager;
    children = [];
    constructor(contentDisplayManager, messages) {
        super(".chat-message-content-display-group");
        this.contentDisplayManager = contentDisplayManager;
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
        this.contentDisplayManager.setContentDisplay(message.id, contentDisplay);
    }
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.js.map