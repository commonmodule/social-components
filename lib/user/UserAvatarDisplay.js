import SocialCompConfig from "../SocialCompConfig.js";
export default class UserAvatarDisplay extends SocialCompConfig.Avatar {
    constructor(user) {
        super(user);
        this.onDom("click", () => SocialCompConfig.showUserInfo(user));
    }
}
//# sourceMappingURL=UserAvatarDisplay.js.map