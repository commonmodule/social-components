import { Dom } from "@commonmodule/app";
import ChatMessage from "./ChatMessage.js";
export default class ChatContentListItem extends Dom {
    private message;
    private contentDisplay;
    constructor(message: ChatMessage);
    getMessageId(): string;
    updateMessage(message: ChatMessage): void;
    addChunk(chunk: string): void;
}
//# sourceMappingURL=ChatContentListItem.d.ts.map