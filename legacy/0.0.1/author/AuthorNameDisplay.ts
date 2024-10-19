import { DomNode } from "@common-module/app";
import SocialCompConfig from "../SocialCompConfig.js";
import Author from "./Author.js";

export default class AuthorNameDisplay extends DomNode {
  constructor(author: Author) {
    super("a.author-name-display");
    this.text = author.name;
    this.onDom("click", () => SocialCompConfig.showAuthorInfo(author));
  }
}
