import { DomNode, DomUtils } from "@common-module/app";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageMenu from "./ChatMessageMenu.js";
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
        const contentDisplay = new ChatMessageContentDisplay(message).appendTo(this);
        contentDisplay.on("remove", () => {
            if (this.children.length === 0) {
                this.remove();
            }
        });
        DomUtils.enhanceWithContextMenu(contentDisplay, (event) => new ChatMessageMenu(event.clientX, event.clientY, {
            messageManager: this.messageManager,
            author: this.messageGroup.author.id,
            messageId: message.id,
            onEdit: () => contentDisplay.startEditMode(),
        }));
        this.messageManager.setContentDisplay(message.id, contentDisplay);
    }
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.js.map