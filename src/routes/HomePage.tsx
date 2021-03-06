import { useEffect, useState } from 'react';
import { getHomepageData } from '../services/contentstack';
import { Hero } from '../components/Hero';
import { NewsGrid } from '../components/NewsGrid';
import { Main } from '../components/Main';
import { IHomeData } from "../interfaces";

export function HomePage() {
  const [homepageData, setHomepageData] = useState<IHomeData>({} as IHomeData);
  let featuredNews;

  useEffect(() => {
    getHomepageData()
      .then((result) => setHomepageData(result[0][0]))
      .catch((error) => console.log(error));
  }, []);

  if (homepageData.modular_blocks) {
    featuredNews = homepageData.modular_blocks.find(obj => obj.hasOwnProperty('featured_news')).featured_news;
  }

  return (
    <>
      <Hero heading={homepageData.heading_1} description={homepageData.description} image={homepageData.hero_image && homepageData.hero_image.url}/>
      <Main>
          {featuredNews ?
            <section>
              <h2>{featuredNews.featured_news_title}</h2>
              {<div dangerouslySetInnerHTML={{ __html: featuredNews.featured_news_description }}></div>}
              <NewsGrid news={featuredNews.news}/>
            </section>
            :
            <div>Loading</div>
          }
      </Main>
    </>
  )
}
