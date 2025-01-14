import { DomNode } from "@common-module/app";
import Comment from "./Comment.js";
import CommentListItem from "./CommentListItem.js";

export default class CommentList extends DomNode {
  public children: CommentListItem[] = [];

  constructor(...comments: Comment[]) {
    super(".comment-list");
  }
}
