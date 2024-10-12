import Author from "./author/Author.js";

class SocialCompConfig {
  public showAuthorInfo = (author: Author): void => {
    throw new Error("Not implemented");
  };
}

export default new SocialCompConfig();
