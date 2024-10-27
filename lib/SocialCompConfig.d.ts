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
    fetchUser: (userId: string) => Promise<User>;
    fetchBulkUsers: (userIds: string[]) => Promise<User[]>;
}
declare const _default: SocialCompConfig;
export default _default;
//# sourceMappingURL=SocialCompConfig.d.ts.map