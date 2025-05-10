import { Dom } from "@commonmodule/app";
import SocialCompConfig from "../SocialCompConfig.js";
export default class UserNameDisplay extends Dom {
    constructor(user) {
        super("a.user-name-display");
        this.text = user.name;
        this.on("click", () => SocialCompConfig.showUserInfo(user));
    }
}
//# sourceMappingURL=UserNameDisplay.js.map