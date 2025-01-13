import { DomNode } from "@common-module/app";
export default class PostDisplay extends DomNode {
    constructor(post) {
        super(".post-display");
        this.text = JSON.stringify(post, null, 2);
    }
}
//# sourceMappingURL=PostDisplay.js.map