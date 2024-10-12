import { DomNode } from "@common-module/app";
export default class AuthorNameDisplay extends DomNode {
    constructor(author) {
        super("a.author-name-display");
        this.text = author.name;
    }
}
//# sourceMappingURL=AuthorNameDisplay.js.map