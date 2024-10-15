import { DomNode } from "@common-module/app";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    contentDisplayManager = new ChatMessageContentDisplayManager();
    children = [];
    constructor(messageGroups) {
        super("ul.chat-message-list");
        this.append(...messageGroups.map((messageGroup) => new ChatMessageListItem(this.contentDisplayManager, messageGroup)));
    }
    addMessage(author, message) {
        if (this.children.length === 0) {
            this.append(new ChatMessageListItem(this.contentDisplayManager, { author, messages: [message] }));
        }
        else {
            const lastItem = this.children[this.children.length - 1];
            if (lastItem.authorId === author.id) {
                lastItem.addMessage(message);
            }
            else {
                this.append(new ChatMessageListItem(this.contentDisplayManager, { author, messages: [message] }));
            }
        }
    }
    editMessage(messageId, newContent) {
        this.contentDisplayManager.editMessage(messageId, newContent);
    }
    deleteMessage(messageId) {
        this.contentDisplayManager.deleteMessage(messageId);
    }
}
//# sourceMappingURL=ChatMessageList.js.map