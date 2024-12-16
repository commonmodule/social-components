import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageForm extends DomNode {
  private input: Input;
  private submitButton: Button;

  constructor(onSend: (content: string) => void) {
    super(".chat-message-form");
    this.append(el(
      "form",
      this.input = new Input({
        multiline: true,
        placeholder: "Type a message...",
      }),
      el(
        ".button-container",
        this.submitButton = new Button({
          type: ButtonType.Circle,
          icon: new SocialCompConfig.SendMessageButtonIcon(),
        }),
      ),
      {
        onsubmit: (event: Event) => {
          event.preventDefault();
          onSend(this.input.value);
          this.input.value = "";
        },
      },
    ));

    this.submitButton.disable();

    this.input.on("valueChanged", (value) => {
      if (value.trim().length > 0) {
        this.submitButton.enable();
      } else {
        this.submitButton.disable();
      }
    });
  }
}
