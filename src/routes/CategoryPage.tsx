import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsCard } from "../components/NewsCard/NewsCard";
import { ICategoryData, INewsData } from "../interfaces";
import { getCategoryDataByUrl, getNewsByCategoryUrl } from "../services/contentstack";

export function CategoryPage() {
  let params = useParams();
  const [categoryPageData, setCategoryPageData] = useState<ICategoryData>({} as ICategoryData);
  const [news, setNews] = useState<INewsData[]>([]);

  useEffect(() => {
    getCategoryDataByUrl((params.categoryUrl as string))
      .then((result) => setCategoryPageData(result[0][0]))
      .catch((error) => console.log(error));

    getNewsByCategoryUrl((params.categoryUrl as string))
      .then((result) => {
        setNews(result[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h2>{categoryPageData && categoryPageData.title}</h2>
        <div>
          {news.map((item: INewsData, index) => {
            return <NewsCard key={index} newsData={item} />
          })}
        </div>
      </div>
    </main>
  )
}
