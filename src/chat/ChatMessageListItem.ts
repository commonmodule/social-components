import { Dom, el } from "@commonmodule/app";
import { ArrayUtils } from "@commonmodule/ts";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import UserNameDisplay from "../user/UserNameDisplay.js";
import ChatContentList from "./ChatContentList.js";
import ChatMessage from "./ChatMessage.js";

export default class ChatMessageListItem extends Dom {
  private _messageIds: string[] = [];
  private _sender: string;
  private _lastCreatedAt: string;

  private senderDisplay: Dom;
  private contentList: ChatContentList;

  constructor(firstMessage: ChatMessage) {
    super("li.chat-message-list-item");

    this._messageIds.push(firstMessage.id);
    this._sender = firstMessage.author;
    this._lastCreatedAt = firstMessage.createdAt;

    this.append(
      this.senderDisplay = el(".sender"),
      this.contentList = new ChatContentList(firstMessage),
    );

    this.loadSenderInfo();
  }

  private async loadSenderInfo() {
    const senderInfo = await UserManager.getUser(this._sender);

    const avatar = new SocialCompConfig.Avatar(senderInfo);
    avatar.on("click", () => SocialCompConfig.showUserInfo(senderInfo));

    this.senderDisplay.append(avatar, new UserNameDisplay(senderInfo));
  }

  public getMessageIds() {
    return this._messageIds;
  }

  public getSender() {
    return this._sender;
  }

  public getLastCreatedAt() {
    return this._lastCreatedAt;
  }

  public addMessage(message: ChatMessage) {
    this._messageIds.push(message.id);
    this._lastCreatedAt = message.createdAt;

    this.contentList.addMessage(message);
  }

  public updateMessage(messageId: string, message: ChatMessage) {
    ArrayUtils.pull(this._messageIds, messageId);
    this._messageIds.push(message.id);

    this.contentList.updateMessage(messageId, message);
  }

  public removeMessage(messageId: string) {
    this.contentList.removeMessage(messageId);
  }

  public addChunk(messageId: string, chunk: string) {
    this.contentList.addChunk(messageId, chunk);
  }
}
