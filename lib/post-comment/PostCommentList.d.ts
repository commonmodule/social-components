import { Dom } from "@commonmodule/app";
import PostComment from "./PostComment.js";
import PostCommentListItem from "./PostCommentListItem.js";
export default class PostCommentList extends Dom {
    children: PostCommentListItem[];
    constructor(...comments: PostComment[]);
}
//# sourceMappingURL=PostCommentList.d.ts.map