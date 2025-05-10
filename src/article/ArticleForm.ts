import { Dom } from "@commonmodule/app";
import { Input } from "@commonmodule/app-components";
import Article from "./Article.js";

export default class ArticleForm extends Dom {
  private titleInput: Input;
  private contentInput: Input;

  constructor(existingPost?: Article) {
    super(".article-form");

    this.append(
      this.titleInput = new Input({
        label: "Title",
        value: existingPost?.title,
      }),
      this.contentInput = new Input({
        label: "Content",
        value: existingPost?.content,
        multiline: true,
      }),
    );
  }

  public getData(): { title: string; content: string } {
    return {
      title: this.titleInput.value,
      content: this.contentInput.value,
    };
  }
}
