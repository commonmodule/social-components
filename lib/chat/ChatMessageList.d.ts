import { DomNode } from "@common-module/app";
import Author from "../author/Author.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
import { MessageActions } from "./ChatMessageManager.js";
export default class ChatMessageList extends DomNode {
    private messageManager;
    private fontLoadingPromise;
    private isScrolling;
    children: ChatMessageListItem[];
    constructor(messageGroups: ChatMessageGroup[], actions: MessageActions);
    private waitForFontsToLoad;
    addMessage(author: Author, message: ChatMessage): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
    private scrollToBottom;
    private performScroll;
}
//# sourceMappingURL=ChatMessageList.d.ts.map