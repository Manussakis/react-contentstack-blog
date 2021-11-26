import Contentstack from "contentstack";

export const Stack = Contentstack.Stack(
  "blte54cc2953fcedc33",
  "cs90c1b26251f7c1bfbe249ef4",
  "dev"
);

export function getHomepageData() {
  return Stack.ContentType("homepage")
    .Query()
    .includeReference(["modular_blocks.featured_news.news"])
    .toJSON()
    .find();
}

export function getNewsData() {
  return Stack.ContentType("news")
    .Query()
    .toJSON()
    .find();
}

export function getSingleNewsDataByUrl(newsUrl: string) {
  const newsQuery = Stack
    .ContentType("news")
    .Query()
    .toJSON();

  return newsQuery.where("url", newsUrl).find();
}
