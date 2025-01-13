import { DomNode } from "@common-module/app";
import Post from "./Post.js";

export default class PostDisplay extends DomNode {
  constructor(post: Post) {
    super(".post-display");
    this.text = JSON.stringify(post, null, 2);
  }
}
