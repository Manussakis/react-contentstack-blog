import { useEffect, useState } from 'react';
import { getHomepageData } from '../services/contentstack';
import { Hero } from '../components/Hero/Hero';
import { NewsCard } from '../components/NewsCard/NewsCard';
import { INewsData } from "../interfaces";

interface IHomeData {
  title: string;
  heading_1: string;
  description: string;
  modular_blocks: any[];
}

export function HomePage() {
  const [homepageData, setHomepageData] = useState<IHomeData>({} as IHomeData);
  let featuredNews;

  useEffect(() => {
    getHomepageData()
      .then((result) => {
        setHomepageData(result[0][0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (homepageData.modular_blocks) {
    featuredNews = homepageData.modular_blocks.find(obj => obj.hasOwnProperty('featured_news')).featured_news;
  }

  return (
    <>
      <Hero heading={homepageData.heading_1} description={homepageData.description} />
      <main>
        <div className="container">
          {featuredNews ?
            <section>
              <h2>{featuredNews.featured_news_title}</h2>
              {<div dangerouslySetInnerHTML={{ __html: featuredNews.featured_news_description }}></div>}
              <div>
                {featuredNews.news.map((item: INewsData, index: number) => {
                  return <NewsCard key={index} newsData={item} />
                })}
              </div>
            </section>
            :
            <div>Loading</div>
          }
        </div>
      </main>
    </>
  )
}
