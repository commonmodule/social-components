import { el } from "@commonmodule/app";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, } from "@commonmodule/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
export default class LoggedInUserAvatarMenu extends DropdownMenu {
    loginManager;
    constructor(loginManager, button) {
        const rect = button.calculateRect();
        super(".logged-in-user-avatar-menu", {
            right: rect.right,
            top: rect.bottom + 10,
        });
        this.loginManager = loginManager;
        this.render();
    }
    async render() {
        const user = await UserManager.getUser(this.loginManager.getLoggedInUser());
        this.appendToHeader(el(".user-info", new SocialCompConfig.Avatar(user), el(".user-details", el(".name", user.name), user.username ? el(".username", user.username) : undefined), {
            onclick: () => {
                SocialCompConfig.goLoggedInUserProfile(user);
                this.remove();
            },
        }));
        this.appendToMain(...(await SocialCompConfig.getLoggedInUserMenu(this, user)), new DropdownMenuGroup(new DropdownMenuItem({
            icon: new SocialCompConfig.LogoutIcon(),
            label: "Log out",
            onClick: () => {
                this.loginManager.logout();
                this.remove();
            },
        })));
    }
}
//# sourceMappingURL=LoggedInUserAvatarMenu.js.map