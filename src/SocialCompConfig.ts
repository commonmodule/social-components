import { DomNode } from "@common-module/app";
import { DropdownMenuGroup } from "@common-module/app-components";
import LoggedInUserAvatarMenu from "./logged-in-user/LoggedInUserAvatarMenu.js";
import User from "./user/User.js";

class DefaultAvatar extends DomNode {
  constructor(user: User) {
    super(".avatar", "👤");
  }
}

type DomNodeConstructor = new () => DomNode;

class DefaultEditMenuIcon extends DomNode {
  constructor() {
    super("span.icon.edit", "✏️");
  }
}

class DefaultDeleteMenuIcon extends DomNode {
  constructor() {
    super("span.icon.delete", "❌");
  }
}

class DefaultSendMessageButtonIcon extends DomNode {
  constructor() {
    super("span.icon.send-message", "⬆️");
  }
}

class DefaultLogoutIcon extends DomNode {
  constructor() {
    super("span.icon.logout", "🚪");
  }
}

class SocialCompConfig {
  public Avatar: typeof DefaultAvatar = DefaultAvatar;
  public LogoutIcon: DomNodeConstructor = DefaultLogoutIcon;
  public EditMenuIcon: DomNodeConstructor = DefaultEditMenuIcon;
  public DeleteMenuIcon: DomNodeConstructor = DefaultDeleteMenuIcon;
  public SendMessageButtonIcon: DomNodeConstructor =
    DefaultSendMessageButtonIcon;

  public login = (): void => {
    throw new Error("Not implemented");
  };

  public showUserInfo = (user: User): void => {
    throw new Error("Not implemented");
  };

  public fetchUser: (userId: string) => Promise<User> = async () => {
    throw new Error("Not implemented");
  };

  public fetchBulkUsers: (userIds: string[]) => Promise<User[]> = async () => {
    throw new Error("Not implemented");
  };

  public getLoggedInUserMenu = (
    menu: LoggedInUserAvatarMenu,
    user: User,
  ): Promise<DropdownMenuGroup> => {
    throw new Error("Not implemented");
  };
}

export default new SocialCompConfig();
