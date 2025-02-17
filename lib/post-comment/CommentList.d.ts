import { DomNode } from "@common-module/app";
import Comment from "./Comment.js";
import CommentListItem from "./CommentListItem.js";
export default class CommentList extends DomNode {
    children: CommentListItem[];
    constructor(...comments: Comment[]);
}
//# sourceMappingURL=CommentList.d.ts.map