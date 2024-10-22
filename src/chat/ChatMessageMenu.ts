import {
  Confirm,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
import ChatMessageManager from "./ChatMessageManager.js";

export default class ChatMessageMenu extends DropdownMenu {
  constructor(
    left: number,
    top: number,
    private options: {
      messageManager: ChatMessageManager;
      author: string;
      messageId: number;
      onEdit: () => void;
    },
  ) {
    super(".chat-message-menu", { left, top });
    this.appendToMain(
      new DropdownMenuGroup(
        new DropdownMenuItem({
          icon: new SocialCompConfig.EditMenuIcon(),
          label: "Edit",
          onClick: () => {
            options.onEdit();
            this.remove();
          },
        }),
        new DropdownMenuItem({
          icon: new SocialCompConfig.DeleteMenuIcon(),
          label: "Delete",
          onClick: () => {
            this.deleteMessage();
            this.remove();
          },
        }),
      ),
    );
  }

  private async deleteMessage() {
    await new Confirm({
      title: "Delete Message",
      message: "Are you sure you want to delete this message?",
    }).waitForConfirmation();

    await this.options.messageManager.actions.onDelete(this.options.messageId);
  }
}
