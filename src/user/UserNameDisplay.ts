import { Dom } from "@commonmodule/app";
import SocialCompConfig from "../SocialCompConfig.js";
import User from "./User.js";

export default class UserNameDisplay extends Dom {
  constructor(user: User) {
    super("a.user-name-display");
    this.text = user.name;
    this.on("click", () => SocialCompConfig.showUserInfo(user));
  }
}
