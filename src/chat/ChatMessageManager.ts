import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";

export interface MessageActions {
  onEdit: (messageId: number, newContent: string) => Promise<void>;
  onDelete: (messageId: number) => Promise<void>;
}

export default class ChatMessageManager {
  private contentDisplayMap: Map<number, ChatMessageContentDisplay> = new Map();

  constructor(public actions: MessageActions) {}

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
