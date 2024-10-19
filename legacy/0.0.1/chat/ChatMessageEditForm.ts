import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageEditForm extends DomNode {
  private input: Input;
  private submitButton: Button;

  constructor(originalMessage: string, onSave: (message: string) => void) {
    super(".chat-message-edit-form");

    this.append(el(
      "form",
      this.input = new Input({
        placeholder: "Type a message...",
        value: originalMessage,
      }),
      el(
        ".actions",
        this.submitButton = new Button({
          type: ButtonType.Circle,
          icon: SocialCompConfig.sendButtonIcon.clone(),
        }),
      ),
      {
        onsubmit: (event: Event) => {
          event.preventDefault();
          onSave(this.input.value);
          this.remove();
        },
      },
    ));

    this.on("visible", () => this.input.focus());

    if (originalMessage.trim().length === 0) {
      this.submitButton.disable();
    }

    this.input.on("valueChanged", (value) => {
      if (value.trim().length > 0) {
        this.submitButton.enable();
      } else {
        this.submitButton.disable();
      }
    });
  }
}
