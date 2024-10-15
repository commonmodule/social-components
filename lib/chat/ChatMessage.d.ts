interface Reaction {
    emoji: string;
    count: number;
    recentUsers: string[];
}
export default interface ChatMessage {
    id: number;
    content: string;
    replyTo?: number;
    reactions: Reaction[];
    isEdited?: boolean;
}
export {};
//# sourceMappingURL=ChatMessage.d.ts.map