import SocialContent from "../core/SocialContent.js";

export default interface PostComment extends SocialContent {
  postId: number;
  thumbnailUrls?: { [originalUrl: string]: string };
}
