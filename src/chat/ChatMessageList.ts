import { DomNode } from "@common-module/app";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";

export default class ChatMessageList extends DomNode {
  constructor(messageGroups: ChatMessageGroup[]) {
    super("ul.chat-message-list");
    this.append(
      ...messageGroups.map((messageGroup) =>
        new ChatMessageListItem(messageGroup)
      ),
    );
  }
}
