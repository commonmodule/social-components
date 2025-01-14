import { DomNode } from "@common-module/app";
import Article from "./Article.js";
export default class PostForm extends DomNode {
    private titleInput;
    private contentInput;
    constructor(existingPost?: Article);
    getData(): {
        title: string;
        content: string;
    };
}
//# sourceMappingURL=PostForm.d.ts.map