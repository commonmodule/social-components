import { DomNode } from "@common-module/app";
import { Input } from "@common-module/app-components";
import Post from "./Post.js";

export default class PostForm extends DomNode {
  private titleInput: Input;
  private contentInput: Input;

  constructor(existingPost?: Post) {
    super(".post-form");

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
