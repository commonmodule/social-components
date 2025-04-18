import { EventContainer } from "@commonmodule/ts";
export default abstract class LoginManager extends EventContainer<{
    loginStatusChanged: () => void;
}> {
    abstract isLoggedIn(): boolean;
    abstract getLoggedInUser(): string | undefined;
    abstract logout(): void;
}
//# sourceMappingURL=LoginManager.d.ts.map