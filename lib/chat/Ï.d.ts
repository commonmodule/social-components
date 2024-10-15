import { DropdownMenu } from "@common-module/app-components";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageMenu extends DropdownMenu {
    constructor(left: number, top: number, options: {
        manager: ChatMessageManager;
        author: string;
        messageId: number;
        onEdit: () => void;
    });
    private deleteMessage;
}
//# sourceMappingURL=%C3%8F.d.ts.map