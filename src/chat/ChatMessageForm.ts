import { DomNode } from "@common-module/app";
import { Button, Input } from "@common-module/app-components";

export default class ChatMessageForm extends DomNode {
  constructor() {
    super("form.chat-message-form");
    this.append(
      new Input({
        placeholder: "Type a message...",
      }),
      new Button({
        title: "Send",
      }),
    );
  }
}
