import { EventContainer } from "@common-module/ts";
export default abstract class LoginManager extends EventContainer<{
    loginStatusChanged: () => void;
}> {
    abstract get isLoggedIn(): boolean;
}
//# sourceMappingURL=LoginEventContainer.d.ts.map