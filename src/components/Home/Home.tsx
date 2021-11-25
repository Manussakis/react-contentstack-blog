import { useHomeData } from "../../HomeContext";
import { Hero } from "../Hero/Hero";
import { NewsCard, INewsData } from "../NewsCard/NewsCard";

interface IFeaturedNews {
	featured_news_title: string;
	featured_news_description: string;
	news: any[];
}

export function Home() {
	const homeData = useHomeData();
	let featuredNews;

	if (homeData.modular_blocks) {
		featuredNews = homeData.modular_blocks.find(obj => obj.hasOwnProperty('featured_news')).featured_news;
	}

	return (
		<>
			<Hero heading={homeData.heading_1} description={homeData.description} />
			<main>
				<div className="container">
					{
						featuredNews
							?
							<section>
								<h2>{featuredNews.featured_news_title}</h2>
								{<div dangerouslySetInnerHTML={{ __html: featuredNews.featured_news_description }}></div>}
								<div>
									{featuredNews.news.map((news: INewsData, i: number) => <NewsCard key={i} newsData={news} />)}
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