import { DomNode, el } from "@common-module/app";
import { ArrayUtils } from "@common-module/ts";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import UserNameDisplay from "../user/UserNameDisplay.js";
import ChatContentList from "./ChatContentList.js";
export default class ChatMessageListItem extends DomNode {
    _messageIds = [];
    _sender;
    _lastCreatedAt;
    senderDisplay;
    contentList;
    constructor(firstMessage) {
        super("li.chat-message-list-item");
        this._messageIds.push(firstMessage.id);
        this._sender = firstMessage.author;
        this._lastCreatedAt = firstMessage.createdAt;
        this.append(this.senderDisplay = el(".sender"), this.contentList = new ChatContentList(firstMessage));
        this.loadSenderInfo();
    }
    async loadSenderInfo() {
        const senderInfo = await UserManager.getUser(this._sender);
        const avatar = new SocialCompConfig.Avatar(senderInfo);
        avatar.onDom("click", () => SocialCompConfig.showUserInfo(senderInfo));
        this.senderDisplay.append(avatar, new UserNameDisplay(senderInfo));
    }
    getMessageIds() {
        return this._messageIds;
    }
    getSender() {
        return this._sender;
    }
    getLastCreatedAt() {
        return this._lastCreatedAt;
    }
    addMessage(message) {
        this._messageIds.push(message.id);
        this._lastCreatedAt = message.createdAt;
        this.contentList.addMessage(message);
    }
    updateMessage(messageId, message) {
        ArrayUtils.pull(this._messageIds, messageId);
        this._messageIds.push(message.id);
        this.contentList.updateMessage(messageId, message);
    }
    removeMessage(messageId) {
        this.contentList.removeMessage(messageId);
    }
    addChunk(messageId, chunk) {
        this.contentList.addChunk(messageId, chunk);
    }
}
//# sourceMappingURL=ChatMessageListItem.js.map