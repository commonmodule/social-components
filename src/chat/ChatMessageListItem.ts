import { DomNode, el } from "@common-module/app";
import UserManager from "../user/UserManager.js";
import ChatContentList from "./ChatContentList.js";
import ChatMessage from "./ChatMessage.js";

export default class ChatMessageListItem extends DomNode {
  public sender: string;
  public lastCreatedAt: string;

  private senderDisplay: DomNode;
  private contentList: ChatContentList;

  constructor(firstMessage: ChatMessage) {
    super("li.chat-message-list-item");

    this.sender = firstMessage.sender;
    this.lastCreatedAt = firstMessage.createdAt;

    this.append(
      this.senderDisplay = el(".sender"),
      this.contentList = new ChatContentList(),
    );

    this.loadSenderInfo();
  }

  private async loadSenderInfo() {
    const senderInfo = await UserManager.getUser(this.sender);
    this.senderDisplay.append(senderInfo.name);
  }

  public addMessage(message: ChatMessage) {
    this.contentList.addMessage(message);
    this.lastCreatedAt = message.createdAt;
  }
}
