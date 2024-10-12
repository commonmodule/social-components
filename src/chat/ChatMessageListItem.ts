import { DomNode, el } from "@common-module/app";
import AuthorAvatarDisplay from "../author/AuthorAvatarDisplay.js";
import ChatMessageContentDisplayGroup from "./ChatMessageContentDisplayGroup.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import AuthorNameDisplay from "../author/AuthorNameDisplay.js";

export default class ChatMessageListItem extends DomNode {
  constructor(messageGroup: ChatMessageGroup) {
    super("li.chat-message-list-item");
    this.append(
      el(".avatar", new AuthorAvatarDisplay(messageGroup.author)),
      el(
        "main",
        el(".author", new AuthorNameDisplay(messageGroup.author)),
        new ChatMessageContentDisplayGroup(messageGroup.messages),
      ),
    );
  }
}
