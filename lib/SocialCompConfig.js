import { el } from "@common-module/app";
class SocialCompConfig {
    editMenuIcon = el("span.icon.edit", "✏️");
    deleteMenuIcon = el("span.icon.delete", "❌");
    sendButtonIcon = el("span.icon.send", "⬆️");
    showAuthorInfo = (author) => {
        throw new Error("Not implemented");
    };
}
export default new SocialCompConfig();
//# sourceMappingURL=SocialCompConfig.js.map