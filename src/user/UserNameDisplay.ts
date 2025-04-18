import { DomNode } from "@commonmodule/app";
import SocialCompConfig from "../SocialCompConfig.js";
import User from "./User.js";

export default class UserNameDisplay extends DomNode {
  constructor(user: User) {
    super("a.user-name-display");
    this.text = user.name;
    this.onDom("click", () => SocialCompConfig.showUserInfo(user));
  }
}
