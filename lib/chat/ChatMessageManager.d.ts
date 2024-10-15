import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export interface MessageActions {
    onEdit: (messageId: number, newContent: string) => Promise<void>;
    onDelete: (messageId: number) => Promise<void>;
}
export default class ChatMessageManager {
    actions: MessageActions;
    private contentDisplayMap;
    constructor(actions: MessageActions);
    setContentDisplay(messageId: number, contentDisplay: ChatMessageContentDisplay): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
}
//# sourceMappingURL=ChatMessageManager.d.ts.map