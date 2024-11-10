import { EventContainer } from "@common-module/ts";
import User from "./User.js";
declare class UserManager extends EventContainer<{
    userUpdated: (user: User) => void;
}> {
    private userCache;
    private pendingRequests;
    setUser(user: User): void;
    getUser(userId: string): Promise<User>;
    getBulkUsers(userIds: string[]): Promise<Map<string, User>>;
}
declare const _default: UserManager;
export default _default;
//# sourceMappingURL=UserManager.d.ts.map