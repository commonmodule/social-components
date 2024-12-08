import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    children: ChatMessageListItem[];
    constructor(messages?: ChatMessage[]);
    setMessages(messages: ChatMessage[]): void;
    addMessage(message: ChatMessage): void;
    updateMessage(message: ChatMessage): void;
    removeMessage(messageId: number): void;
    addChunk(messageId: number, chunk: string): void;
}
//# sourceMappingURL=ChatMessageList.d.ts.map