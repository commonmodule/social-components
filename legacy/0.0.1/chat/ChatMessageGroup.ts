import User from "../user/User.js";
import ChatMessage from "./ChatMessage.js";

export default interface ChatMessageGroup {
  author: User;
  messages: ChatMessage[];
}
