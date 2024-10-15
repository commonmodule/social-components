import { DomNode } from "@common-module/app";
import Author from "../author/Author.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    private messageManager;
    children: ChatMessageListItem[];
    constructor(messageGroups: ChatMessageGroup[], executeEdit: (messageId: number, newContent: string) => Promise<void>, executeDelete: (messageId: number) => Promise<void>);
    addMessage(author: Author, message: ChatMessage): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
}
//# sourceMappingURL=ChatMessageList.d.ts.map