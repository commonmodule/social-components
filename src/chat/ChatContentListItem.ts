import { DomNode, el } from "@common-module/app";
import ChatMessage from "./ChatMessage.js";

export default class ChatContentListItem extends DomNode {
  private contentDisplay: DomNode;

  constructor(private message: ChatMessage) {
    super(`li.chat-content-list-item${message.isTemp ? ".temp" : ""}`);
    this.append(
      this.contentDisplay = el("p.content", message.content),
    );
  }

  public getMessageId() {
    return this.message.id;
  }

  public updateMessage(message: ChatMessage) {
    this.message = message;
    this.contentDisplay.text = message.content;

    message.isTemp ? this.addClass("temp") : this.removeClass("temp");
  }

  public addChunk(chunk: string) {
    this.contentDisplay.append(chunk);
  }
}
