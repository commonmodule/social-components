import { Dom, el } from "@commonmodule/app";
import { AppCompConfig, Button, ButtonType, } from "@commonmodule/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import LoggedInUserAvatarMenu from "./LoggedInUserAvatarMenu.js";
export default class LoggedInUserAvatarButton extends Dom {
    loginManager;
    showName;
    constructor(loginManager, showName = false) {
        super(".logged-in-user-avatar-button");
        this.loginManager = loginManager;
        this.showName = showName;
        this.render();
        loginManager.on("loginStatusChanged", this.loginStatusChangedListener);
        UserManager.on("userUpdated", this.userUpdatedListener);
    }
    loginStatusChangedListener = () => this.render();
    userUpdatedListener = (user) => {
        if (this.loginManager.isLoggedIn() &&
            user.id === this.loginManager.getLoggedInUser()) {
            this.render();
        }
    };
    async render() {
        if (this.loginManager.isLoggedIn()) {
            try {
                this.clear().append(new AppCompConfig.LoadingSpinner());
                const user = await UserManager.getUser(this.loginManager.getLoggedInUser());
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
    remove() {
        this.loginManager.off("loginStatusChanged", this.loginStatusChangedListener);
        UserManager.off("userUpdated", this.userUpdatedListener);
        super.remove();
    }
}
//# sourceMappingURL=LoggedInUserAvatarButton.js.map