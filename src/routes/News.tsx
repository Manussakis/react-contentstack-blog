import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { NewsDate } from "../components/NewsDate/NewsDate";
import { NewsAuthor } from "../components/NewsAuthor/NewsAuthor";
import { INewsData } from "../interfaces";
import { getSingleNewsDataByUrl } from "../services/contentstack";
import { isEmpty } from "lodash";
import { Main } from "../components/Main/Main";

export function News() {
  let params = useParams();
  const [newsData, setNewsData] = useState<INewsData>({} as INewsData);

  useEffect(() => {
    getSingleNewsDataByUrl((params.newsUrl as string))
      .then((result) => setNewsData(result[0][0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main>
      {isEmpty(newsData) ?
        'Loading'
        :
        <>
          <NewsDate date={newsData.updated_at} />
          <h2>{newsData.title}</h2>
          <div>
            By <NewsAuthor author={newsData.author[0]} />
          </div>
          <CategoryList categories={newsData.categories} />
          <figure className="u-m-0">
            <img className="u-responsive-img" alt={newsData.featured_image.image_alt} src={newsData.featured_image.image.url} />
            <figcaption>{newsData.featured_image.image_caption}</figcaption>
          </figure>
          <p className="news__content" dangerouslySetInnerHTML={{ __html: newsData.body }}></p>
        </>
      }
    </Main>
  )
}
