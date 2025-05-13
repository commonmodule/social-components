import { Dom } from "@commonmodule/app";
import { DropdownMenuGroup } from "@commonmodule/app-components";
import LoggedInUserAvatarMenu from "./logged-in-user/LoggedInUserAvatarMenu.js";
import User from "./user/User.js";

class DefaultAvatar extends Dom {
  constructor(user: User) {
    super(".avatar", "👤");
  }
}

type DomConstructor = new () => Dom;

class DefaultEditMenuIcon extends Dom {
  constructor() {
    super("span.icon.edit", "✏️");
  }
}

class DefaultDeleteMenuIcon extends Dom {
  constructor() {
    super("span.icon.delete", "❌");
  }
}

class DefaultSendMessageButtonIcon extends Dom {
  constructor() {
    super("span.icon.send-message", "⬆️");
  }
}

class DefaultLogoutIcon extends Dom {
  constructor() {
    super("span.icon.logout", "🚪");
  }
}

class SocialCompConfig {
  public Avatar: typeof DefaultAvatar = DefaultAvatar;
  public LogoutIcon: DomConstructor = DefaultLogoutIcon;
  public EditMenuIcon: DomConstructor = DefaultEditMenuIcon;
  public DeleteMenuIcon: DomConstructor = DefaultDeleteMenuIcon;
  public SendMessageButtonIcon: DomConstructor = DefaultSendMessageButtonIcon;

  public login = (): Promise<void> => {
    throw new Error("Not implemented");
  };

  public showUserInfo = (user: User): void => {
    throw new Error("Not implemented");
  };

  public fetchUser: (userId: string) => Promise<User> | User = async () => {
    throw new Error("Not implemented");
  };

  public fetchBulkUsers: (userIds: string[]) => Promise<User[]> = async () => {
    throw new Error("Not implemented");
  };

  public goLoggedInUserProfile = (user: User): void => {};

  public getLoggedInUserMenu = (
    menu: LoggedInUserAvatarMenu,
    user: User,
  ): Promise<(DropdownMenuGroup | undefined)[]> => {
    throw new Error("Not implemented");
  };
}

export default new SocialCompConfig();
