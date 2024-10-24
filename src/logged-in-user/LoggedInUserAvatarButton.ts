import { DomNode } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import LoggedInUserAvatarMenu from "./LoggedInUserAvatarMenu.js";
import LoginManager from "./LoginManager.js";

export default class LoggedInUserAvatarButton extends DomNode {
  constructor(private loginManager: LoginManager) {
    super(".logged-in-user-avatar-button");

    this.render();

    this.subscribe(
      loginManager,
      "loginStatusChanged",
      () => this.render(),
    );
  }

  private async render() {
    if (this.loginManager.isLoggedIn) {
      const user = await UserManager.getUser(this.loginManager.loggedInUser!);

      this.empty().append(
        new Button({
          type: ButtonType.Circle,
          icon: new SocialCompConfig.Avatar(user),
          onClick: (button, event) => {
            event.stopPropagation();
            new LoggedInUserAvatarMenu(this.loginManager, button);
          },
        }),
      );
    } else {
      this.empty().append(
        new Button({
          type: ButtonType.Contained,
          title: "Log in",
          onClick: () => SocialCompConfig.login(),
        }),
      );
    }
  }
}
