import { DomNode } from "@common-module/app";
import Post from "./Post.js";

export default class PostForm extends DomNode {
  constructor(existingPost?: Post) {
    super(".post-form", "Post form");
  }
}
