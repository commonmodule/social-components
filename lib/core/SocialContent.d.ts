export interface Reaction {
    emoji: string;
    count: number;
    recentUsers: string[];
    hasReacted?: boolean;
}
export default interface SocialContent {
    id: string;
    author: string;
    content: string;
    reactions?: Reaction[];
    createdAt: string;
    editedAt?: string;
}
//# sourceMappingURL=SocialContent.d.ts.map