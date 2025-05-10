import { Dom } from "@commonmodule/app";
import { Input } from "@commonmodule/app-components";
export default class ArticleForm extends Dom {
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