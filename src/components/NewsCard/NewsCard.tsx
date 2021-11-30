import { Link } from "react-router-dom";
import { INewsData } from "../../interfaces";
import { NewsAuthor } from "../NewsAuthor/NewsAuthor";
import { NewsDate } from "../NewsDate/NewsDate";

import './NewsCard.scss';

interface INewsCardProps {
  newsData: INewsData;
}

export function NewsCard({ newsData }: INewsCardProps) {
  return (
    <article className="news-card">
      <span className="news-card__surface"></span>
      <div className="u-position-relative">
        <Link to={newsData.url}>
          <img className="news-card__img" alt={newsData.featured_image.image_alt} src={newsData.featured_image.image.url} />
        </Link>
        <header className="news-card__header">
          <h3>
            <Link to={newsData.url}>{newsData.title}</Link>
          </h3>
          <div>
            <NewsDate date={newsData.updated_at} />
            <span aria-hidden="true">, </span>
            <span className="news-card__author-name">
              By <NewsAuthor author={newsData.author[0]} />
            </span>
          </div>
        </header>
        <p className="news-card__content" dangerouslySetInnerHTML={{ __html: newsData.excerpt }}></p>
      </div>
      <footer className="news-card__footer">
        <a className="news-card__read-more" href={newsData.url}>Read more</a>
      </footer >
    </article >
  )
}
