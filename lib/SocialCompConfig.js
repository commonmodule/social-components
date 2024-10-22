import { DomNode } from "@common-module/app";
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
    EditMenuIcon = DefaultEditMenuIcon;
    DeleteMenuIcon = DefaultDeleteMenuIcon;
    SendMessageButtonIcon = DefaultSendMessageButtonIcon;
    showAuthorInfo = (author) => {
        throw new Error("Not implemented");
    };
}
export default new SocialCompConfig();
//# sourceMappingURL=SocialCompConfig.js.map