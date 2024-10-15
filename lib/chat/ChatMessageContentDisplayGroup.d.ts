import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageContentDisplayGroup extends DomNode {
    private messageManager;
    private messageGroup;
    children: ChatMessageContentDisplay[];
    constructor(messageManager: ChatMessageManager, messageGroup: ChatMessageGroup);
    addMessage(message: ChatMessage): void;
}
//# sourceMappingURL=ChatMessageContentDisplayGroup.d.ts.map