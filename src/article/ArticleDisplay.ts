import { DomNode } from "@commonmodule/app";
import Article from "./Article.js";

export default class ArticleDisplay extends DomNode {
  constructor(article: Article) {
    super(".article-display");
    this.text = JSON.stringify(article, null, 2);
  }
}
