import { DomNode } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import LoggedInUserAvatarMenu from "./LoggedInUserAvatarMenu.js";
export default class LoggedInUserAvatarButton extends DomNode {
    loginManager;
    constructor(loginManager) {
        super(".logged-in-user-avatar-button");
        this.loginManager = loginManager;
        this.render();
        this.subscribe(loginManager, "loginStatusChanged", () => this.render());
    }
    async render() {
        if (this.loginManager.isLoggedIn) {
            try {
                const user = await UserManager.getUser(this.loginManager.loggedInUser);
                this.empty().append(new Button({
                    type: ButtonType.Circle,
                    icon: new SocialCompConfig.Avatar(user),
                    onClick: (button, event) => {
                        event.stopPropagation();
                        new LoggedInUserAvatarMenu(this.loginManager, button);
                    },
                }));
            }
            catch (error) {
                console.error(error);
                this.renderLoginButton();
            }
        }
        else
            this.renderLoginButton();
    }
    renderLoginButton() {
        this.empty().append(new Button({
            type: ButtonType.Contained,
            title: "Log in",
            onClick: () => SocialCompConfig.login(),
        }));
    }
}
//# sourceMappingURL=LoggedInUserAvatarButton.js.map