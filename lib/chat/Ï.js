import { DropdownMenu } from "@common-module/app-components";
export default class ChatMessageMenu extends DropdownMenu {
    constructor(left, top, options) {
        super(".chat-message-menu", {
            left,
            top,
            items: [{
                    label: "Edit",
                    onClick: () => options.onEdit(),
                }, {
                    label: "Delete",
                    onClick: () => this.deleteMessage(),
                }],
        });
    }
    async deleteMessage() {
    }
}
//# sourceMappingURL=%C3%8F.js.map