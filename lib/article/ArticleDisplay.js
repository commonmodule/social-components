import { Dom } from "@commonmodule/app";
export default class ArticleDisplay extends Dom {
    constructor(article) {
        super(".article-display");
        this.text = JSON.stringify(article, null, 2);
    }
}
//# sourceMappingURL=ArticleDisplay.js.map