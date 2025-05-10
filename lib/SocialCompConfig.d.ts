import { Dom } from "@commonmodule/app";
import { DropdownMenuGroup } from "@commonmodule/app-components";
import LoggedInUserAvatarMenu from "./logged-in-user/LoggedInUserAvatarMenu.js";
import User from "./user/User.js";
declare class DefaultAvatar extends Dom {
    constructor(user: User);
}
type DomConstructor = new () => Dom;
declare class SocialCompConfig {
    Avatar: typeof DefaultAvatar;
    LogoutIcon: DomConstructor;
    EditMenuIcon: DomConstructor;
    DeleteMenuIcon: DomConstructor;
    SendMessageButtonIcon: DomConstructor;
    login: () => Promise<void>;
    showUserInfo: (user: User) => void;
    fetchUser: (userId: string) => Promise<User> | User;
    fetchBulkUsers: (userIds: string[]) => Promise<User[]>;
    goLoggedInUserProfile: (user: User) => void;
    getLoggedInUserMenu: (menu: LoggedInUserAvatarMenu, user: User) => Promise<(DropdownMenuGroup | undefined)[]>;
}
declare const _default: SocialCompConfig;
export default _default;
//# sourceMappingURL=SocialCompConfig.d.ts.map