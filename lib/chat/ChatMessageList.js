import { DomNode } from "@common-module/app";
import ChatMessageListItem from "./ChatMessageListItem.js";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageList extends DomNode {
    messageManager;
    fontLoadingPromise;
    isScrolling = false;
    children = [];
    constructor(messageGroups, actions) {
        super("ul.chat-message-list");
        this.messageManager = new ChatMessageManager(actions);
        this.append(...messageGroups.map((messageGroup) => new ChatMessageListItem(this.messageManager, messageGroup)));
        this.fontLoadingPromise = this.waitForFontsToLoad();
        this.scrollToBottom();
    }
    async waitForFontsToLoad() {
        if ("fonts" in document) {
            try {
                await document.fonts.ready;
            }
            catch (error) {
                console.error("Error loading fonts:", error);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
        else {
            console.warn("document.fonts not supported. Using fallback timeout.");
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
    addMessage(author, message) {
        if (this.children.length === 0) {
            this.append(new ChatMessageListItem(this.messageManager, { author, messages: [message] }));
        }
        else {
            const lastItem = this.children[this.children.length - 1];
            if (lastItem.authorId === author.id) {
                lastItem.addMessage(message);
            }
            else {
                this.append(new ChatMessageListItem(this.messageManager, { author, messages: [message] }));
            }
        }
        this.scrollToBottom();
    }
    editMessage(messageId, newContent) {
        this.messageManager.editMessage(messageId, newContent);
    }
    deleteMessage(messageId) {
        this.messageManager.deleteMessage(messageId);
    }
    async scrollToBottom() {
        if (this.isScrolling)
            return;
        this.isScrolling = true;
        try {
            this.performScroll();
            await this.fontLoadingPromise;
            this.performScroll();
        }
        finally {
            this.isScrolling = false;
        }
    }
    performScroll() {
        requestAnimationFrame(() => {
            this.htmlElement.scrollTop = this.htmlElement.scrollHeight;
        });
    }
}
//# sourceMappingURL=ChatMessageList.js.map