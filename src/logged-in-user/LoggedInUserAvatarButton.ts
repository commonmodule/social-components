import { DomNode, el } from "@commonmodule/app";
import {
  AppCompConfig,
  Button,
  ButtonType,
} from "@commonmodule/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import User from "../user/User.js";
import UserManager from "../user/UserManager.js";
import LoggedInUserAvatarMenu from "./LoggedInUserAvatarMenu.js";
import LoginManager from "./LoginManager.js";

export default class LoggedInUserAvatarButton extends DomNode {
  constructor(
    private loginManager: LoginManager,
    private showName: boolean = false,
  ) {
    super(".logged-in-user-avatar-button");

    this.render();

    loginManager.on("loginStatusChanged", this.loginStatusChangedListener);
    UserManager.on("userUpdated", this.userUpdatedListener);
  }

  private loginStatusChangedListener = () => this.render();
  private userUpdatedListener = (user: User) => {
    if (
      this.loginManager.isLoggedIn() &&
      user.id === this.loginManager.getLoggedInUser()
    ) {
      this.render();
    }
  };

  private async render() {
    if (this.loginManager.isLoggedIn()) {
      try {
        this.clear().append(new AppCompConfig.LoadingSpinner());

        const user = await UserManager.getUser(
          this.loginManager.getLoggedInUser()!,
        );

        this.clear().append(
          new Button(".avatar", {
            icon: new SocialCompConfig.Avatar(user),
            title: this.showName ? el("span.name", user.name) : undefined,
            onClick: (button, event) => {
              event.stopPropagation();
              new LoggedInUserAvatarMenu(this.loginManager, button);
            },
          }),
        );
      } catch (error) {
        console.error(error);
        this.renderLoginButton();
      }
    } else this.renderLoginButton();
  }

  private renderLoginButton() {
    this.clear().append(
      new Button({
        type: ButtonType.Contained,
        title: "Log in",
        onClick: () => SocialCompConfig.login(),
      }),
    );
  }

  public remove(): void {
    this.loginManager.off(
      "loginStatusChanged",
      this.loginStatusChangedListener,
    );
    UserManager.off("userUpdated", this.userUpdatedListener);
    super.remove();
  }
}
