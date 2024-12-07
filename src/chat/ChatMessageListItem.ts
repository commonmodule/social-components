import { DomNode, el } from "@common-module/app";
import UserManager from "../user/UserManager.js";
import ChatContentList from "./ChatContentList.js";
import ChatMessage from "./ChatMessage.js";

export default class ChatMessageListItem extends DomNode {
  private _messageIds: number[] = [];
  private _sender: string;
  private _lastCreatedAt: string;

  private senderDisplay: DomNode;
  private contentList: ChatContentList;

  constructor(firstMessage: ChatMessage) {
    super("li.chat-message-list-item");

    this._messageIds.push(firstMessage.id);
    this._sender = firstMessage.sender;
    this._lastCreatedAt = firstMessage.createdAt;

    this.append(
      this.senderDisplay = el(".sender"),
      this.contentList = new ChatContentList(firstMessage),
    );

    this.loadSenderInfo();
  }

  private async loadSenderInfo() {
    const senderInfo = await UserManager.getUser(this._sender);
    this.senderDisplay.append(senderInfo.name);
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

  public updateMessage(message: ChatMessage) {
    this.contentList.updateMessage(message);
  }

  public removeMessage(messageId: number) {
    this.contentList.removeMessage(messageId);
  }

  public addChunk(messageId: number, chunk: string) {
    this.contentList.addChunk(messageId, chunk);
  }
}
