import { Link } from "react-router-dom";
import { INewsData } from "../../interfaces";

import './NewsCard.scss';

export interface INewsCardProps {
  newsData: INewsData;
}

export function NewsCard({ newsData }: INewsCardProps) {
  return (
    <article className="news-card">
      <span className="news-card__surface"></span>
      <div className="u-position-relative">
        <Link to={newsData.url}>
          <img className="news-card__img img-fluid lazyload" alt={newsData.featured_image.image_alt} src={newsData.featured_image.image.url} />
        </Link>
        <header className="news-card__header">
          <h3 className="news-card__title">
            <Link to={newsData.url}>{newsData.title}</Link>
          </h3>
          <div className="news-card__author">
            <div className="">
              <time className="news-card__date">
                {new Intl.DateTimeFormat('us').format(new Date(newsData.updated_at))}
              </time>
              <span aria-hidden="true">,</span>
              <span className="news-card__author-name color--secondary">
                By <Link to={newsData.author[0].url}>{newsData.author[0].title}</Link>
              </span>
            </div>
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
