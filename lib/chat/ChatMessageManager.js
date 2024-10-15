export default class ChatMessageManager {
    executeEdit;
    executeDelete;
    contentDisplayMap = new Map();
    constructor(executeEdit, executeDelete) {
        this.executeEdit = executeEdit;
        this.executeDelete = executeDelete;
    }
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
//# sourceMappingURL=ChatMessageManager.js.map