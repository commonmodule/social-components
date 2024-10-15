import { el } from "@common-module/app";
import Author from "./author/Author.js";

class SocialCompConfig {
  public editMenuIcon = el("span.icon.edit", "✏️");
  public deleteMenuIcon = el("span.icon.delete", "❌");

  public showAuthorInfo = (author: Author): void => {
    throw new Error("Not implemented");
  };
}

export default new SocialCompConfig();
