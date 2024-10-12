import { DomNode, el } from "@common-module/app";
export default class AuthorAvatarDisplay extends DomNode {
    constructor(author) {
        super("a.author-avatar-display");
        this.append(el("img", { src: author.avatarUrl }));
    }
}
//# sourceMappingURL=AuthorAvatarDisplay.js.map