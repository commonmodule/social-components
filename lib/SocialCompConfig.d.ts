import { DomNode } from "@common-module/app";
import User from "./user/User.js";
declare class DefaultAvatar extends DomNode {
    constructor(user: User);
}
type DomNodeConstructor = new () => DomNode;
declare class SocialCompConfig {
    Avatar: typeof DefaultAvatar;
    EditMenuIcon: DomNodeConstructor;
    DeleteMenuIcon: DomNodeConstructor;
    SendMessageButtonIcon: DomNodeConstructor;
    login: () => void;
    showUserInfo: (user: User) => void;
    createFallbackUser: (userId: string) => User;
    fetchUser: (userId: string) => Promise<User | undefined>;
    fetchBulkUsers: (userIds: string[]) => Promise<User[]>;
}
declare const _default: SocialCompConfig;
export default _default;
//# sourceMappingURL=SocialCompConfig.d.ts.map