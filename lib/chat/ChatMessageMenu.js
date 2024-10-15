import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
export default class ChatMessageMenu extends DropdownMenu {
    constructor(left, top, options) {
        super(".chat-message-menu", { left, top });
        this.appendToMain(new DropdownMenuGroup(new DropdownMenuItem({
            icon: SocialCompConfig.editMenuIcon.clone(),
            label: "Edit",
            onClick: () => {
                options.onEdit();
                this.remove();
            },
        }), new DropdownMenuItem({
            icon: SocialCompConfig.deleteMenuIcon.clone(),
            label: "Delete",
            onClick: async () => {
                await this.deleteMessage();
                this.remove();
            },
        })));
    }
    async deleteMessage() {
    }
}
//# sourceMappingURL=ChatMessageMenu.js.map