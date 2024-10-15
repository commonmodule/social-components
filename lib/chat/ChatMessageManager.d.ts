import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageManager {
    executeEdit: (messageId: number, newContent: string) => Promise<void>;
    executeDelete: (messageId: number) => Promise<void>;
    private contentDisplayMap;
    constructor(executeEdit: (messageId: number, newContent: string) => Promise<void>, executeDelete: (messageId: number) => Promise<void>);
    setContentDisplay(messageId: number, contentDisplay: ChatMessageContentDisplay): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
}
//# sourceMappingURL=ChatMessageManager.d.ts.map