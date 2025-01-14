import SocialContent from "../core/SocialContent.js";

export default interface Post extends SocialContent {
  replyTo?: number;
}
