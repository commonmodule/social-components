import { DomNode } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
export default class ChatMessageListItem extends DomNode {
    private messageGroup;
    private displayGroup;
    constructor(contentDisplayManager: ChatMessageContentDisplayManager, messageGroup: ChatMessageGroup);
    get authorId(): string;
    addMessage(message: ChatMessage): void;
}
//# sourceMappingURL=ChatMessageListItem.d.ts.map