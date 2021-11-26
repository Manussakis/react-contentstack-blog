import { useEffect, useState } from "react"
import { NewsCard } from "../components/NewsCard/NewsCard";
import { getNewsData, getNewsPageData } from "../services/contentstack";
import { INewsData, INewsPageData } from "../interfaces";

export function NewsPage() {
  const [newsPage, setNewsPage] = useState<INewsPageData>({} as INewsPageData);
  const [news, setNews] = useState<INewsData[]>([]);

  useEffect(() => {
    getNewsPageData()
      .then((result) => {
        setNewsPage(result[0][0]);
      })
      .catch((error) => {
        console.log(error);
      });

    getNewsData()
      .then((result) => {
        setNews(result[0]);
        console.log(result[0]);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h2>{newsPage && newsPage.title}</h2>
        <p>{newsPage && newsPage.description}</p>
        <div>
          {news.map((item: INewsData, index:number) => {
            return <NewsCard key={index} newsData={item} />
          })}
        </div>
      </div>
    </main>
  )
}
