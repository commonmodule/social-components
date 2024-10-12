import { DomNode } from "@common-module/app";
import ChatMessageListItem from "./ChatMessageListItem.js";
export default class ChatMessageList extends DomNode {
    constructor(messageGroups) {
        super("ul.chat-message-list");
        this.append(...messageGroups.map((messageGroup) => new ChatMessageListItem(messageGroup)));
    }
}
//# sourceMappingURL=ChatMessageList.js.map