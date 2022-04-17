import { Link } from "react-router-dom";
import { IAuthorData } from "../../interfaces";

interface INewsAuthorProps {
  author: IAuthorData;
}

export function NewsAuthor({ author }: INewsAuthorProps) {
  return (
    <Link to={author.url}>{author.title}</Link>
  )
}
