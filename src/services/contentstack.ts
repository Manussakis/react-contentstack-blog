import Contentstack from "contentstack";

export const Stack = Contentstack.Stack(
  process.env.REACT_APP_CONTENTSTACK_API_KEY as string,
  process.env.REACT_APP_CONTENTSTACK_DELIVERY_KEY as string,
  process.env.NODE_ENV
);

export function getHomepageData() {
  return Stack.ContentType("homepage")
    .Query()
    .includeReference([
      "modular_blocks.featured_news.news",
      "modular_blocks.featured_news.news.categories",
      "modular_blocks.featured_news.news.author"
    ])
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
    .includeReference(["categories", "author"])
    .toJSON()
    .find();
}

export function getSingleNewsDataByUrl(newsUrl: string) {
  return Stack.ContentType("news")
    .Query()
    .includeReference(["categories", "author"])
    .toJSON()
    .where("url", `/news/${newsUrl}`)
    .find();
}

export function getCategoryDataByUrl(categoryUrl: string) {
  return Stack.ContentType("category")
    .Query()
    .toJSON()
    .where("url", `/category/${categoryUrl}`)
    .find();
}

export function getNewsByCategoryUrl(categoryUrl: string) {
  return Stack.ContentType("news")
    .Query()
    .includeReference(["categories", "author"])
    .toJSON()
    .referenceIn("categories", { url: `/category/${categoryUrl}` })
    .find();
}

export function getAuthorDataByUrl(authorUrl: string) {
  return Stack.ContentType("author")
    .Query()
    .toJSON()
    .where("url", `/author/${authorUrl}`)
    .find();
}

export function getNewsByAuthorUrl(authorUrl: string) {
  return Stack.ContentType("news")
    .Query()
    .includeReference(["categories", "author"])
    .toJSON()
    .referenceIn("author", { url: `/author/${authorUrl}` })
    .find();
}

export function getFooterData() {
  return Stack.ContentType("footer")
    .Query()
    .toJSON()
    .find();
}
