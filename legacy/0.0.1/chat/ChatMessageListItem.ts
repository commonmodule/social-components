import { DomNode, el } from "@common-module/app";
import UserAvatarDisplay from "../user/UserAvatarDisplay.js";
import UserNameDisplay from "../user/UserNameDisplay.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplayGroup from "./ChatMessageContentDisplayGroup.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageManager from "./ChatMessageManager.js";

export default class ChatMessageListItem extends DomNode {
  private displayGroup: ChatMessageContentDisplayGroup;

  constructor(
    messageManager: ChatMessageManager,
    private messageGroup: ChatMessageGroup,
  ) {
    super("li.chat-message-list-item");

    this.append(
      el(".avatar", new UserAvatarDisplay(messageGroup.author)),
      el(
        "main",
        el(".author", new UserNameDisplay(messageGroup.author)),
        this.displayGroup = new ChatMessageContentDisplayGroup(
          messageManager,
          messageGroup,
        ),
      ),
    );

    this.displayGroup.on("remove", () => this.remove());
  }

  public get authorId() {
    return this.messageGroup.author.id;
  }

  public addMessage(message: ChatMessage) {
    this.displayGroup.addMessage(message);
  }
}
