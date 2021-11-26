export interface INewsData {
  author: string;
  title: string;
  excerpt: string;
  body: string;
  url: string;
  categories: ICategoryData[];
}

export interface INewsPageData {
  title: string;
  description: string;
}

export interface ICategoryData {
  title: string;
  url: string;
}
