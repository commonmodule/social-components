import { DomNode, el } from "@common-module/app";
import Author from "./Author.js";

export default class AuthorAvatarDisplay extends DomNode {
  constructor(author: Author) {
    super("a.author-avatar-display");
    this.append(el("img", { src: author.avatarUrl }));
  }
}
