import { DomNode } from "@common-module/app";
import Author from "./author/Author.js";
type DomNodeConstructor = new () => DomNode;
declare class SocialCompConfig {
    EditMenuIcon: DomNodeConstructor;
    DeleteMenuIcon: DomNodeConstructor;
    SendMessageButtonIcon: DomNodeConstructor;
    showAuthorInfo: (author: Author) => void;
}
declare const _default: SocialCompConfig;
export default _default;
//# sourceMappingURL=SocialCompConfig.d.ts.map