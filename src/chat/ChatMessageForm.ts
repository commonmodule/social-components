import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageForm extends DomNode {
  constructor() {
    super("form.chat-message-form");
    this.append(
      new Input({
        placeholder: "Type a message...",
      }),
      el(
        ".actions",
        new Button({
          type: ButtonType.Circle,
          icon: SocialCompConfig.sendButtonIcon.clone(),
        }),
      ),
    );
  }
}
