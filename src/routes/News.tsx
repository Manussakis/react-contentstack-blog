import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICategoryData, INewsData } from "../interfaces";
import { getSingleNewsDataByUrl } from "../services/contentstack";

export function News() {
  let params = useParams();
  const [newsData, setNewsData] = useState<INewsData>({} as INewsData);

  useEffect(() => {
    getSingleNewsDataByUrl((params.newsUrl as string))
      .then((result) => {
        setNewsData(result[0][0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h2>{newsData.title}</h2>
        <ul>
        {newsData.categories && newsData.categories.map((category: ICategoryData, index: number) => {
          return (
            <li key={index}>
              <Link to={category.url}>{category.title}</Link>
            </li>
          )
        })}
      </ul>
      </div>
    </main>
  )
}
