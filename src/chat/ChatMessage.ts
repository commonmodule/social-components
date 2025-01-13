import SocialContent from "../core/SocialContent.js";

export default interface ChatMessage extends SocialContent {
  replyTo?: number;
  isTemp?: boolean;
}
