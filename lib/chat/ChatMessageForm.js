import { Dom, el } from "@commonmodule/app";
import { Button, ButtonType, Input } from "@commonmodule/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
export default class ChatMessageForm extends Dom {
    input;
    submitButton;
    constructor(onSend) {
        super("form.chat-message-form");
        this.append(this.input = new Input({
            placeholder: "Type a message...",
        }), el(".button-container", this.submitButton = new Button({
            type: ButtonType.Icon,
            icon: new SocialCompConfig.SendMessageButtonIcon(),
        })), {
            onsubmit: (event) => {
                event.preventDefault();
                onSend(this.input.value);
                this.input.value = "";
            },
        });
        this.submitButton.disable();
        this.input.on("valueChanged", (value) => {
            if (value.trim().length > 0) {
                this.submitButton.enable();
            }
            else {
                this.submitButton.disable();
            }
        });
    }
}
//# sourceMappingURL=ChatMessageForm.js.map