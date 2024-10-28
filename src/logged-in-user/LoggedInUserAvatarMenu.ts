import { el } from "@common-module/app";
import {
  Button,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import UserManager from "../user/UserManager.js";
import LoginManager from "./LoginManager.js";

export default class LoggedInUserAvatarMenu extends DropdownMenu {
  constructor(private loginManager: LoginManager, button: Button) {
    const rect = button.calculateRect();

    super(".logged-in-user-avatar-menu", {
      right: rect.right,
      top: rect.bottom + 10,
    });

    this.renderHeader();

    this.appendToMain(
      new DropdownMenuGroup(
        new DropdownMenuItem({
          label: "Log out",
          onClick: () => {
            this.loginManager.logout();
            this.remove();
          },
        }),
      ),
    );
  }

  private async renderHeader() {
    const user = await UserManager.getUser(this.loginManager.loggedInUser!);

    this.appendToHeader(
      el(
        ".user-info",
        new SocialCompConfig.Avatar(user),
        el(
          ".user-details",
          el(".name", user.name),
          el(".username", user.username),
        ),
        {
          onclick: () => {
            this.remove();
          },
        },
      ),
    );
  }
}
