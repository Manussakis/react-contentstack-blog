interface INewsDateProps {
  date: string;
}

export function NewsDate({ date }: INewsDateProps) {
  return (
    <time className="news-date">
      {new Intl.DateTimeFormat('us').format(new Date(date))}
    </time>
  )
}
