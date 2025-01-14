import { DomNode } from "@common-module/app";
import Comment from "./Comment.js";
import PostCommentListItem from "./PostCommentListItem.js";
export default class PostCommentList extends DomNode {
    children: PostCommentListItem[];
    constructor(...comments: Comment[]);
}
//# sourceMappingURL=PostCommentList.d.ts.map