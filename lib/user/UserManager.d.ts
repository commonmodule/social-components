import User from "./User.js";
declare class UserManager {
    private userCache;
    private pendingRequests;
    getUser(userId: string): Promise<User>;
    getBulkUsers(userIds: string[]): Promise<Map<string, User>>;
}
declare const _default: UserManager;
export default _default;
//# sourceMappingURL=UserManager.d.ts.map