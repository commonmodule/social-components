import { DomNode } from "@common-module/app";
import Article from "./Article.js";
export default class ArticleForm extends DomNode {
    private titleInput;
    private contentInput;
    constructor(existingPost?: Article);
    getData(): {
        title: string;
        content: string;
    };
}
//# sourceMappingURL=ArticleForm.d.ts.map