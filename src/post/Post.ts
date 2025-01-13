import SocialContent from "../core/SocialContent.js";

export default interface Post extends SocialContent {
  title: string;
  content: string;
}
