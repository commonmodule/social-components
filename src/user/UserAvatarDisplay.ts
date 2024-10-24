import SocialCompConfig from "../SocialCompConfig.js";
import User from "./User.js";

export default class UserAvatarDisplay extends SocialCompConfig.Avatar {
  constructor(user: User) {
    super(user);
    this.onDom("click", () => SocialCompConfig.showUserInfo(user));
  }
}
