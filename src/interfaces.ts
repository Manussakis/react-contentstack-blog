export interface IHomeData {
  title: string;
  heading_1: string;
  description: string;
  modular_blocks: any[];
  hero_image: IImage;
}

export interface INewsData {
  title: string;
  excerpt: string;
  body: string;
  url: string;
  categories: ICategoryData[];
  featured_image: IFeaturedImage;
  updated_at: string;
  author: IAuthorData[];
}

export interface IFeaturedImage {
  image: IImage;
  image_alt: string;
  image_caption: string;
}

export interface INewsPageData {
  title: string;
  description: string;
}

export interface ICategoryData {
  title: string;
  url: string;
}

export interface IAuthorData {
  title: string;
  url: string;
  avatar: IImage;
  occupation: string;
}

export interface IImage {
  url: string;
}

export interface IFooterData {
  colophon: string;
}
