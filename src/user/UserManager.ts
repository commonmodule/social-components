import SocialCompConfig from "../SocialCompConfig.js";
import User from "./User.js";

class UserManager {
  private userCache = new Map<string, User>();
  private pendingRequests = new Map<string, Promise<User>>();

  public async getUser(userId: string): Promise<User> {
    const cachedUser = this.userCache.get(userId);
    if (cachedUser) return cachedUser;

    const pendingRequest = this.pendingRequests.get(userId);
    if (pendingRequest) return pendingRequest;

    const request = SocialCompConfig.fetchUser(userId);
    this.pendingRequests.set(userId, request);

    try {
      const user = await request;
      this.userCache.set(userId, user);
      return user;
    } finally {
      this.pendingRequests.delete(userId);
    }
  }

  async getBulkUsers(userIds: string[]): Promise<Map<string, User>> {
    const uniqueIds = [...new Set(userIds)];
    const result = new Map<string, User>();

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
