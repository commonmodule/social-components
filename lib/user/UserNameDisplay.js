import { DomNode } from "@commonmodule/app";
import SocialCompConfig from "../SocialCompConfig.js";
export default class UserNameDisplay extends DomNode {
    constructor(user) {
        super("a.user-name-display");
        this.text = user.name;
        this.onDom("click", () => SocialCompConfig.showUserInfo(user));
    }
}
//# sourceMappingURL=UserNameDisplay.js.map