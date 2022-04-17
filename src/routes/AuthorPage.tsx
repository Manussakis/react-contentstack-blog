import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { AuthorAvatar } from "../components/AuthorAvatar";
import { Main } from "../components/Main";
import { NewsGrid } from "../components/NewsGrid";
import { IAuthorData, INewsData } from "../interfaces";
import { isEmpty } from "lodash";
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
      {isEmpty(authorData) ?
        'Loading'
        :
        <section>
          <AuthorAvatar author={authorData}/>
          <h2>News by {authorData.title}</h2>
          <p>{authorData.occupation}</p>
          <NewsGrid news={news} />
        </section>
      }
    </Main>
  )
}
