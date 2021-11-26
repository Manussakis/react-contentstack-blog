import Contentstack from "contentstack";

export const Stack = Contentstack.Stack(
  "blte54cc2953fcedc33",
  "cs90c1b26251f7c1bfbe249ef4",
  "dev"
);

export function getHomepageData() {
  return Stack.ContentType("homepage")
    .Query()
    .includeReference(["modular_blocks.featured_news.news", "modular_blocks.featured_news.news.categories"])
    .toJSON()
    .find();
}

export function getNewsPageData() {
  return Stack.ContentType("news_page")
    .Query()
    .toJSON()
    .find();
}

export function getNewsData() {
  return Stack.ContentType("news")
    .Query()
    .includeReference(["categories"])
    .toJSON()
    .find();
}

export function getSingleNewsDataByUrl(newsUrl: string) {
  const newsQuery = Stack.ContentType("news")
    .Query()
    .toJSON();

  return newsQuery.where("url", `/news/${newsUrl}`).find();
}

export function getCategoryDataByUrl(categoryUrl: string) {
  const categoryQuery = Stack.ContentType("category")
    .Query()
    .toJSON();

  return categoryQuery.where("url", `/category/${categoryUrl}`).find();
}

export function getNewsByCategoryUrl(categoryUrl: string) {
  const newsQuery = Stack.ContentType("news")
    .Query()
    .includeReference(["categories"])
    .toJSON();

  return newsQuery
    .referenceIn("categories", { url: `/category/${categoryUrl}` })
    .find();
}
