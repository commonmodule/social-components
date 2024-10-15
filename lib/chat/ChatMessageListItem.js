import { DomNode, el } from "@common-module/app";
import AuthorAvatarDisplay from "../author/AuthorAvatarDisplay.js";
import AuthorNameDisplay from "../author/AuthorNameDisplay.js";
import ChatMessageContentDisplayGroup from "./ChatMessageContentDisplayGroup.js";
export default class ChatMessageListItem extends DomNode {
    messageGroup;
    displayGroup;
    constructor(messageManager, messageGroup) {
        super("li.chat-message-list-item");
        this.messageGroup = messageGroup;
        this.append(el(".avatar", new AuthorAvatarDisplay(messageGroup.author)), el("main", el(".author", new AuthorNameDisplay(messageGroup.author)), this.displayGroup = new ChatMessageContentDisplayGroup(messageManager, messageGroup.messages)));
        this.displayGroup.on("remove", () => this.remove());
    }
    get authorId() {
        return this.messageGroup.author.id;
    }
    addMessage(message) {
        this.displayGroup.addMessage(message);
    }
}
//# sourceMappingURL=ChatMessageListItem.js.map