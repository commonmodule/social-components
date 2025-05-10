import { Dom } from "@commonmodule/app";
import ChatMessage from "./ChatMessage.js";
export default class ChatMessageListItem extends Dom {
    private _messageIds;
    private _sender;
    private _lastCreatedAt;
    private senderDisplay;
    private contentList;
    constructor(firstMessage: ChatMessage);
    private loadSenderInfo;
    getMessageIds(): string[];
    getSender(): string;
    getLastCreatedAt(): string;
    addMessage(message: ChatMessage): void;
    updateMessage(messageId: string, message: ChatMessage): void;
    removeMessage(messageId: string): void;
    addChunk(messageId: string, chunk: string): void;
}
//# sourceMappingURL=ChatMessageListItem.d.ts.map