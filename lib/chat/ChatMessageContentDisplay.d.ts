import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageContentDisplay extends DomNode {
    private messageManager;
    private message;
    private contentDisplay;
    private editForm;
    constructor(messageManager: ChatMessageManager, authorId: string, message: ChatMessage);
    editContent(newContent: string): void;
    startEditMode(): void;
    endEditMode(save?: boolean): void;
}
//# sourceMappingURL=ChatMessageContentDisplay.d.ts.map