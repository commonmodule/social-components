import { DomNode } from "@common-module/app";
import SocialCompConfig from "../SocialCompConfig.js";
export default class AuthorNameDisplay extends DomNode {
    constructor(author) {
        super("a.author-name-display");
        this.text = author.name;
        this.onDom("click", () => SocialCompConfig.showAuthorInfo(author));
    }
}
//# sourceMappingURL=AuthorNameDisplay.js.map