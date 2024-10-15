import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, } from "@common-module/app-components";
export default class ChatMessageMenu extends DropdownMenu {
    constructor(left, top, options) {
        super(".chat-message-menu", { left, top });
        this.appendToMain(new DropdownMenuGroup(new DropdownMenuItem({
            label: "Edit",
            onClick: () => {
                options.onEdit();
                this.remove();
            },
        }), new DropdownMenuItem({
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