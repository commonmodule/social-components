import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
export default class ChatMessageListItem extends DomNode {
    private _messageIds;
    private _sender;
    private _lastCreatedAt;
    private senderDisplay;
    private contentList;
    constructor(firstMessage: ChatMessage);
    private loadSenderInfo;
    getMessageIds(): number[];
    getSender(): string;
    getLastCreatedAt(): string;
    addMessage(message: ChatMessage): void;
    updateMessage(message: ChatMessage): void;
    removeMessage(messageId: number): void;
    addChunk(messageId: number, chunk: string): void;
}
//# sourceMappingURL=ChatMessageListItem.d.ts.map