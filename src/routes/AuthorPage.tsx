import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Main } from "../components/Main/Main";
import { NewsGrid } from "../components/NewsGrid/NewsGrid";
import { IAuthorData, INewsData } from "../interfaces";
import { getAuthorDataByUrl, getNewsByAuthorUrl } from "../services/contentstack";


export function AuthorPage() {
  let params = useParams();
  const [authorData, setAuthorData] = useState<IAuthorData>({} as IAuthorData);
  const [news, setNews] = useState<INewsData[]>([]);

  useEffect(() => {
    getAuthorDataByUrl((params.authorUrl as string))
      .then((result) => setAuthorData(result[0][0]))
      .catch((error) => console.log(error));

    getNewsByAuthorUrl((params.authorUrl as string))
      .then((result) => setNews(result[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main>
      <section>
        <h2>{authorData && authorData.title}</h2>
        <NewsGrid news={news}/>
      </section>
    </Main>
  )
}
