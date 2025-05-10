import { Dom, el } from "@commonmodule/app";
import ChatMessage from "./ChatMessage.js";

export default class ChatContentListItem extends Dom {
  private contentDisplay: Dom;

  constructor(private message: ChatMessage) {
    super(`li.chat-content-list-item${message.isTemp ? ".temp" : ""}`);
    this.append(
      //this.contentDisplay = el(".content.markdown-body"),
      this.contentDisplay = el(".content"),
    );
    if (message.content) {
      /*this.contentDisplay.htmlElement.innerHTML = marked(
        message.content,
      ) as string;*/
      this.contentDisplay.text = message.content;
    }
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
