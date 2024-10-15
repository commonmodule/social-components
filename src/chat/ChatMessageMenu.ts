import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import ChatMessageManager from "./ChatMessageManager.js";

export default class ChatMessageMenu extends DropdownMenu {
  constructor(left: number, top: number, options: {
    messageManager: ChatMessageManager;
    author: string;
    messageId: number;
    onEdit: () => void;
  }) {
    super(".chat-message-menu", { left, top });
    this.appendToMain(
      new DropdownMenuGroup(
        new DropdownMenuItem({
          icon: SocialCompConfig.editMenuIcon.clone(),
          label: "Edit",
          onClick: () => {
            options.onEdit();
            this.remove();
          },
        }),
        new DropdownMenuItem({
          icon: SocialCompConfig.deleteMenuIcon.clone(),
          label: "Delete",
          onClick: async () => {
            await this.deleteMessage();
            this.remove();
          },
        }),
      ),
    );
  }

  private async deleteMessage() {
    //TODO:
  }
}
