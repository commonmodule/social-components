import { DomNode } from "@commonmodule/app";
import Article from "./Article.js";
import PostListItem from "./ArticleListItem.js";

export default class ArticleList extends DomNode {
  public children: PostListItem[] = [];

  constructor(...articles: Article[]) {
    super(".article-list");
  }
}
