import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INewsData } from "../interfaces/INewsData";
import { getSingleNewsDataByUrl } from "../services/contentstack";

export function News() {
  let params = useParams();
  const [newsData, setNewsData] = useState<INewsData>({} as INewsData);

  useEffect(() => {
    getSingleNewsDataByUrl(`/${(params.newsUrl as string)}`)
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
      </div>
    </main>
  )
}
