import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";

export default class ChatMessageContentDisplayManager {
  private contentDisplayMap: Map<number, ChatMessageContentDisplay> = new Map();

  public setContentDisplay(
    messageId: number,
    contentDisplay: ChatMessageContentDisplay,
  ) {
    this.contentDisplayMap.set(messageId, contentDisplay);
    contentDisplay.on("remove", () => this.contentDisplayMap.delete(messageId));
  }

  public editMessage(messageId: number, newContent: string) {
    const contentDisplay = this.contentDisplayMap.get(messageId);
    contentDisplay?.editContent(newContent);
  }

  public deleteMessage(messageId: number) {
    const contentDisplay = this.contentDisplayMap.get(messageId);
    contentDisplay?.remove();
  }
}
