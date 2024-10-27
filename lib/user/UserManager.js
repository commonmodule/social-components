import SocialCompConfig from "../SocialCompConfig.js";
class UserManager {
    userCache = new Map();
    pendingRequests = new Map();
    async getUser(userId) {
        const cachedUser = this.userCache.get(userId);
        if (cachedUser)
            return cachedUser;
        const pendingRequest = this.pendingRequests.get(userId);
        if (pendingRequest)
            return pendingRequest;
        const request = SocialCompConfig.fetchUser(userId);
        this.pendingRequests.set(userId, request);
        try {
            const user = await request;
            if (user)
                this.userCache.set(userId, user);
            return user;
        }
        finally {
            this.pendingRequests.delete(userId);
        }
    }
    async getBulkUsers(userIds) {
        const uniqueIds = [...new Set(userIds)];
        const result = new Map();
        const uncachedIds = uniqueIds.filter((id) => {
            const user = this.userCache.get(id);
            if (user) {
                result.set(id, user);
                return false;
            }
            return true;
        });
        if (uncachedIds.length > 0) {
            const users = await SocialCompConfig.fetchBulkUsers(uncachedIds);
            users.forEach((user) => {
                this.userCache.set(user.id, user);
                result.set(user.id, user);
            });
        }
        return result;
    }
}
export default new UserManager();
//# sourceMappingURL=UserManager.js.map