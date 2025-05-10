import { Dom } from "@commonmodule/app";
import Article from "./Article.js";
import ArticleListItem from "./ArticleListItem.js";

export default class ArticleList extends Dom {
  public children: ArticleListItem[] = [];

  constructor(...articles: Article[]) {
    super(".article-list");
  }
}
