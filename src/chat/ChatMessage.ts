import Author from "../author/Author.js";

export default interface ChatMessage {
  id: number;
  author: Author;
  content: string;
}
