import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../components/Main/Main";
import { NewsGrid } from "../components/NewsGrid/NewsGrid";
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
      .then((result) => setNews(result[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main>
      <section>
        <h2>{categoryPageData && categoryPageData.title}</h2>
        <NewsGrid news={news}/>
      </section>
    </Main>
  )
}
