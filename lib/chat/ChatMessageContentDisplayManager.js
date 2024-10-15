export default class ChatMessageContentDisplayManager {
    contentDisplayMap = new Map();
    setContentDisplay(messageId, contentDisplay) {
        this.contentDisplayMap.set(messageId, contentDisplay);
        contentDisplay.on("remove", () => this.contentDisplayMap.delete(messageId));
    }
    editMessage(messageId, newContent) {
        const contentDisplay = this.contentDisplayMap.get(messageId);
        contentDisplay?.editContent(newContent);
    }
    deleteMessage(messageId) {
        const contentDisplay = this.contentDisplayMap.get(messageId);
        contentDisplay?.remove();
    }
}
//# sourceMappingURL=ChatMessageContentDisplayManager.js.map