import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    private contentDisplayManager;
    children: ChatMessageContentDisplay[];
    constructor(contentDisplayManager: ChatMessageContentDisplayManager, messages: ChatMessage[]);
    addMessage(message: ChatMessage): void;
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.d.ts.map