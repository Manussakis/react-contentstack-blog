import { Link } from "react-router-dom"
import { ICategoryData, INewsData } from "../../interfaces"

export interface INewsCardProps {
  newsData: INewsData;
}

export function NewsCard({ newsData }: INewsCardProps) {
  return (
    <article>
      <Link to={newsData.url}>
        <h3>{newsData.title}</h3>
      </Link>
      <ul>
        {newsData.categories.map((category: ICategoryData, index: number) => {
          return (
            <li key={index}>
              <Link to={category.url}>{category.title}</Link>
            </li>
          )
        })}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: newsData.excerpt }}></div>
    </article>
  )
}
