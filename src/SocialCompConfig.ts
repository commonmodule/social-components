import { DomNode, el } from "@common-module/app";
import Author from "./author/Author.js";

type DomNodeConstructor = new () => DomNode;

class DefaultEditMenuIcon extends DomNode {
  constructor() {
    super("span.icon.edit", "✏️");
  }
}

class DefaultDeleteMenuIcon extends DomNode {
  constructor() {
    super("span.icon.delete", "❌");
  }
}

class DefaultSendMessageButtonIcon extends DomNode {
  constructor() {
    super("span.icon.send-message", "⬆️");
  }
}

class SocialCompConfig {
  public EditMenuIcon: DomNodeConstructor = DefaultEditMenuIcon;
  public DeleteMenuIcon: DomNodeConstructor = DefaultDeleteMenuIcon;
  public SendMessageButtonIcon: DomNodeConstructor =
    DefaultSendMessageButtonIcon;

  public showAuthorInfo = (author: Author): void => {
    throw new Error("Not implemented");
  };
}

export default new SocialCompConfig();
