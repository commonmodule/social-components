import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    private messageManager;
    children: ChatMessageContentDisplay[];
    constructor(messageManager: ChatMessageManager, messages: ChatMessage[]);
    addMessage(message: ChatMessage): void;
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.d.ts.map