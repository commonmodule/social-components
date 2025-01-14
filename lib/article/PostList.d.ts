import { DomNode } from "@common-module/app";
import Article from "./Article.js";
import PostListItem from "./PostListItem.js";
export default class PostList extends DomNode {
    children: PostListItem[];
    constructor(...posts: Article[]);
}
//# sourceMappingURL=PostList.d.ts.map