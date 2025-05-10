import { Dom } from "@commonmodule/app";
class DefaultAvatar extends Dom {
    constructor(user) {
        super(".avatar", "👤");
    }
}
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
    Avatar = DefaultAvatar;
    LogoutIcon = DefaultLogoutIcon;
    EditMenuIcon = DefaultEditMenuIcon;
    DeleteMenuIcon = DefaultDeleteMenuIcon;
    SendMessageButtonIcon = DefaultSendMessageButtonIcon;
    login = () => {
        throw new Error("Not implemented");
    };
    showUserInfo = (user) => {
        throw new Error("Not implemented");
    };
    fetchUser = async () => {
        throw new Error("Not implemented");
    };
    fetchBulkUsers = async () => {
        throw new Error("Not implemented");
    };
    goLoggedInUserProfile = (user) => {
        throw new Error("Not implemented");
    };
    getLoggedInUserMenu = (menu, user) => {
        throw new Error("Not implemented");
    };
}
export default new SocialCompConfig();
//# sourceMappingURL=SocialCompConfig.js.map