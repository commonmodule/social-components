import { Dom } from "@commonmodule/app";
import LoginManager from "./LoginManager.js";
export default class LoggedInUserAvatarButton extends Dom {
    private loginManager;
    private showName;
    constructor(loginManager: LoginManager, showName?: boolean);
    private loginStatusChangedListener;
    private userUpdatedListener;
    private render;
    private renderLoginButton;
    remove(): void;
}
//# sourceMappingURL=LoggedInUserAvatarButton.d.ts.map