import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageForm extends DomNode {
  constructor() {
    super(".chat-message-form");
    this.append(el(
      "form",
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
    ));
  }
}
