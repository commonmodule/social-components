import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
export default class ChatMessageContentDisplay extends DomNode {
    private contentDisplay;
    constructor(message: ChatMessage);
    editContent(newContent: string): void;
    startEditMode(): void;
    endEditMode(save?: boolean): void;
}
//# sourceMappingURL=ChatMessageContentDisplay.d.ts.map