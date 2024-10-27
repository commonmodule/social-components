import { DomNode } from "@common-module/app";
class DefaultAvatar extends DomNode {
    constructor(user) {
        super(".avatar", "👤");
    }
}
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
class SocialCompConfig {
    Avatar = DefaultAvatar;
    EditMenuIcon = DefaultEditMenuIcon;
    DeleteMenuIcon = DefaultDeleteMenuIcon;
    SendMessageButtonIcon = DefaultSendMessageButtonIcon;
    login = () => {
        throw new Error("Not implemented");
    };
    showUserInfo = (user) => {
        throw new Error("Not implemented");
    };
    createFallbackUser = (userId) => {
        throw new Error("Not implemented");
    };
    fetchUser = async () => {
        throw new Error("Not implemented");
    };
    fetchBulkUsers = async () => {
        throw new Error("Not implemented");
    };
}
export default new SocialCompConfig();
//# sourceMappingURL=SocialCompConfig.js.map