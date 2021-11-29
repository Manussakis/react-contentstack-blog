import { INewsData } from "../../interfaces"
import { NewsCard } from "../NewsCard/NewsCard"

import './NewsGrid.scss';

interface INewsGridProps {
  news: INewsData[];
}

export function NewsGrid({ news }: INewsGridProps) {
  return (
    <div className="news-grid">
      {news.map((item: INewsData, index: number) => {
        return <NewsCard key={index} newsData={item} />
      })}
    </div>
  )
}
