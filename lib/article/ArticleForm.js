import { DomNode } from "@common-module/app";
import { Input } from "@common-module/app-components";
export default class ArticleForm extends DomNode {
    titleInput;
    contentInput;
    constructor(existingPost) {
        super(".article-form");
        this.append(this.titleInput = new Input({
            label: "Title",
            value: existingPost?.title,
        }), this.contentInput = new Input({
            label: "Content",
            value: existingPost?.content,
            multiline: true,
        }));
    }
    getData() {
        return {
            title: this.titleInput.value,
            content: this.contentInput.value,
        };
    }
}
//# sourceMappingURL=ArticleForm.js.map