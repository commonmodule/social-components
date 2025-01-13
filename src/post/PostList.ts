import { DomNode } from "@common-module/app";
import Post from "./Post.js";
import PostListItem from "./PostListItem.js";

export default class PostList extends DomNode {
  public children: PostListItem[] = [];

  constructor(...posts: Post[]) {
    super(".post-list");
  }
}
