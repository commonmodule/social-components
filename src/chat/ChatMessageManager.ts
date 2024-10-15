import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";

export default class ChatMessageManager {
  private contentDisplayMap: Map<number, ChatMessageContentDisplay> = new Map();

  constructor(
    public executeEdit: (
      messageId: number,
      newContent: string,
    ) => Promise<void>,
    public executeDelete: (messageId: number) => Promise<void>,
  ) {}

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
