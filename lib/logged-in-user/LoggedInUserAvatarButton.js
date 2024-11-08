import { DomNode, el } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import LoggedInUserAvatarMenu from "./LoggedInUserAvatarMenu.js";
export default class LoggedInUserAvatarButton extends DomNode {
    loginManager;
    showName;
    constructor(loginManager, showName = false) {
        super(".logged-in-user-avatar-button");
        this.loginManager = loginManager;
        this.showName = showName;
        this.render();
        this.subscribe(loginManager, "loginStatusChanged", () => this.render());
    }
    async render() {
        if (this.loginManager.isLoggedIn) {
            try {
                const user = await UserManager.getUser(this.loginManager.loggedInUser);
                this.clear().append(new Button(".avatar", {
                    icon: new SocialCompConfig.Avatar(user),
                    title: this.showName ? el("span.name", user.name) : undefined,
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
        this.clear().append(new Button({
            type: ButtonType.Contained,
            title: "Log in",
            onClick: () => SocialCompConfig.login(),
        }));
    }
}
//# sourceMappingURL=LoggedInUserAvatarButton.js.map