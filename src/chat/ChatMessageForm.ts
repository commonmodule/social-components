import { Dom, el } from "@commonmodule/app";
import { Button, ButtonType, Input } from "@commonmodule/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageForm extends Dom {
  private input: Input;
  private submitButton: Button;

  constructor(onSend: (content: string) => void) {
    super(".chat-message-form");
    this.append(el(
      "form",
      this.input = new Input({
        //multiline: true,
        placeholder: "Type a message...",
      }),
      el(
        ".button-container",
        this.submitButton = new Button({
          type: ButtonType.Icon,
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
