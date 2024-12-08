import { DomNode } from "@common-module/app";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    children = [];
    constructor(messages) {
        super("ul.chat-message-list");
        if (messages)
            this.setMessages(messages);
    }
    setMessages(messages) {
        this.clear();
        for (const message of messages) {
            this.addMessage(message);
        }
    }
    addMessage(message) {
        const lastItem = this.children[this.children.length - 1];
        if (lastItem && lastItem.getSender() === message.sender &&
            (new Date(message.createdAt).getTime() -
                new Date(lastItem.getLastCreatedAt()).getTime()) < 60000) {
            lastItem.addMessage(message);
        }
        else {
            this.append(new ChatMessageListItem(message));
        }
    }
    updateMessage(message) {
        const item = this.children.find((item) => item.getMessageIds().includes(message.id));
        item?.updateMessage(message);
    }
    removeMessage(messageId) {
        const item = this.children.find((item) => item.getMessageIds().includes(messageId));
        item?.removeMessage(messageId);
    }
    addChunk(messageId, chunk) {
        const item = this.children.find((item) => item.getMessageIds().includes(messageId));
        item?.addChunk(messageId, chunk);
    }
}
//# sourceMappingURL=ChatMessageList.js.map