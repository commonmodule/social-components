import { Dom } from "@commonmodule/app";
import Article from "./Article.js";

export default class ArticleDisplay extends Dom {
  constructor(article: Article) {
    super(".article-display");
    this.text = JSON.stringify(article, null, 2);
  }
}
