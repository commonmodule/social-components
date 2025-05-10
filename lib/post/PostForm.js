import { Dom } from "@commonmodule/app";
import { RichTextEditor } from "@commonmodule/markdown-editor";
export default class PostForm extends Dom {
    constructor() {
        super(".post-form");
        this.append(new RichTextEditor());
    }
}
//# sourceMappingURL=PostForm.js.map