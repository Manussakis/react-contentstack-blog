import { Link } from "react-router-dom"
import { INewsData } from "../../interfaces/INewsData"

export interface INewsCardProps {
  newsData: INewsData;
  linkTo: string;
}

export function NewsCard({ newsData, linkTo }: INewsCardProps) {
  return (
    <Link to={linkTo}>
      <article>
        <h3>{newsData.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: newsData.excerpt }}></div>
      </article>
    </Link>
  )
}
