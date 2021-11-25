export interface INewsData {
  author: string;
  title: string;
  body: string;  
}

export interface INewsCardProps {
  newsData: INewsData;
}

export function NewsCard({ newsData }: INewsCardProps) {
  return (
    <article>
      <h3>{newsData.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: newsData.body }}></div>
    </article>
  )
}