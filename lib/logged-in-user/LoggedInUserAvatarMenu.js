import { el } from "@common-module/app";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, } from "@common-module/app-components";
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
        this.renderHeader();
        this.appendToMain(new DropdownMenuGroup(new DropdownMenuItem({
            label: "test",
            onClick: () => console.log("test"),
        })));
    }
    async renderHeader() {
        let user = await UserManager.getUser(this.loginManager.loggedInUser);
        if (!user) {
            user = SocialCompConfig.createFallbackUser(this.loginManager.loggedInUser);
        }
        this.appendToHeader(el(".user-info", new SocialCompConfig.Avatar(user), el(".user-details", el(".name", user.name), el(".username", user.username)), {
            onclick: () => {
                this.remove();
            },
        }));
    }
}
//# sourceMappingURL=LoggedInUserAvatarMenu.js.map