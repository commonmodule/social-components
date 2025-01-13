import { DomNode } from "@common-module/app";
import PostComment from "./PostComment.js";
import PostCommentListItem from "./PostCommentListItem.js";

export default class PostCommentList extends DomNode {
  public children: PostCommentListItem[] = [];

  constructor(...comments: PostComment[]) {
    super(".post-comment-list");
  }
}
