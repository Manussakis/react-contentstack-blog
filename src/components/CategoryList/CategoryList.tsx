import { Link } from "react-router-dom"
import { ICategoryData } from "../../interfaces"

import './CategoryList.scss';

interface ICategoryListProps {
  categories: ICategoryData[];
}

export function CategoryList({ categories }: ICategoryListProps) {
  return(
    <ul className="category-list">
      {categories.map((category: ICategoryData, index: number) => {
        return (
          <li key={index} className="category-list__item">
            <Link to={category.url}>{category.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
