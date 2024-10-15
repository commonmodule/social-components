import { DomNode } from "@common-module/app";
import ChatMessageManager from "./ChatMessageManager.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    messageManager;
    children = [];
    constructor(messageGroups, executeEdit, executeDelete) {
        super("ul.chat-message-list");
        this.messageManager = new ChatMessageManager(executeEdit, executeDelete);
        this.append(...messageGroups.map((messageGroup) => new ChatMessageListItem(this.messageManager, messageGroup)));
    }
    addMessage(author, message) {
        if (this.children.length === 0) {
            this.append(new ChatMessageListItem(this.messageManager, { author, messages: [message] }));
        }
        else {
            const lastItem = this.children[this.children.length - 1];
            if (lastItem.authorId === author.id) {
                lastItem.addMessage(message);
            }
            else {
                this.append(new ChatMessageListItem(this.messageManager, { author, messages: [message] }));
            }
        }
    }
    editMessage(messageId, newContent) {
        this.messageManager.editMessage(messageId, newContent);
    }
    deleteMessage(messageId) {
        this.messageManager.deleteMessage(messageId);
    }
}
//# sourceMappingURL=ChatMessageList.js.map