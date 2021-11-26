import { useEffect, useState } from "react"
import { NewsCard } from "../components/NewsCard/NewsCard";
import { getNewsData } from "../services/contentstack";
import { INewsData } from "../interfaces/INewsData";

export function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
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
        <h2>News</h2>
        <div>
          {news.map((item: INewsData, index) => {
            return <NewsCard key={index} newsData={item} linkTo={`.${item.url}`} />
          })}
        </div>
      </div>
    </main>
  )
}
