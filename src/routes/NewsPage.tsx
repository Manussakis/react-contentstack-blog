import { useEffect, useState } from "react"
import { getNewsData, getNewsPageData } from "../services/contentstack";
import { INewsData, INewsPageData } from "../interfaces";
import { Main } from "../components/Main";
import { NewsGrid } from "../components/NewsGrid";
import { isEmpty } from "lodash";

export function NewsPage() {
  const [newsPage, setNewsPage] = useState<INewsPageData>({} as INewsPageData);
  const [news, setNews] = useState<INewsData[]>([]);

  useEffect(() => {
    getNewsPageData()
      .then((result) => setNewsPage(result[0][0]))
      .catch((error) => console.log(error));

    getNewsData()
      .then((result) => setNews(result[0]))
      .catch((error) => console.log(error));
  }, []);

  function isDataLoaded() {
    return news.length > 0 && !isEmpty(newsPage);
  }

  return (
    <Main>
      {isDataLoaded() ?
        <section>
          <h2>{newsPage && newsPage.title}</h2>
          <p>{newsPage && newsPage.description}</p>
          <NewsGrid news={news} />
        </section>
        :
        'Loading'
      }
    </Main>
  )
}
