import { DomNode } from "@common-module/app";
import Post from "./Post.js";
export default class PostForm extends DomNode {
    private titleInput;
    private contentInput;
    constructor(existingPost?: Post);
    getData(): {
        title: string;
        content: string;
    };
}
//# sourceMappingURL=PostForm.d.ts.map