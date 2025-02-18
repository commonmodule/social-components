import { DomNode } from "@common-module/app";
import { RichTextEditor } from "@common-module/markdown-editor";
export default class PostForm extends DomNode {
    constructor() {
        super(".post-form");
        this.append(new RichTextEditor());
    }
}
//# sourceMappingURL=PostForm.js.map