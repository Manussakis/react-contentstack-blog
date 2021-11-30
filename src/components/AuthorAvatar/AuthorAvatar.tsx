import { IAuthorData } from "../../interfaces";

import './AuthorAvatar.scss';

interface IAuthorAvatarProps {
  author: IAuthorData;
}

export function AuthorAvatar({ author }: IAuthorAvatarProps) {
  return (
    <div className="author-avatar">
      <img className="u-responsive-img" src={author.avatar.url} alt={author.title} />
    </div>
  )
}
