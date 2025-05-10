import { Dom } from "@commonmodule/app";
import ChatContentListItem from "./ChatContentListItem.js";
import ChatMessage from "./ChatMessage.js";
export default class ChatContentList extends Dom {
    children: ChatContentListItem[];
    constructor(firstMessage: ChatMessage);
    addMessage(message: ChatMessage): void;
    updateMessage(messageId: string, message: ChatMessage): void;
    removeMessage(messageId: string): void;
    addChunk(messageId: string, chunk: string): void;
}
//# sourceMappingURL=ChatContentList.d.ts.map