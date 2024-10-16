import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
export default class ChatMessageForm extends DomNode {
    input;
    constructor(onSend) {
        super(".chat-message-form");
        this.append(el("form", this.input = new Input({
            placeholder: "Type a message...",
        }), el(".actions", new Button({
            type: ButtonType.Circle,
            icon: SocialCompConfig.sendButtonIcon.clone(),
        })), {
            onsubmit: (event) => {
                event.preventDefault();
                onSend(this.input.value);
                this.input.value = "";
            },
        }));
    }
}
//# sourceMappingURL=ChatMessageForm%20copy.js.map