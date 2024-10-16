import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";
export default class ChatMessageEditForm extends DomNode {
    input;
    constructor(originalMessage, onSave) {
        super(".chat-message-edit-form");
        this.append(el("form", this.input = new Input({
            placeholder: "Type a message...",
            value: originalMessage,
        }), el(".actions", new Button({
            type: ButtonType.Circle,
            icon: SocialCompConfig.sendButtonIcon.clone(),
        })), {
            onsubmit: (event) => {
                event.preventDefault();
                onSave(this.input.value);
                this.remove();
            },
        }));
        this.on("visible", () => this.input.focus());
    }
}
//# sourceMappingURL=ChatMessageEditForm.js.map