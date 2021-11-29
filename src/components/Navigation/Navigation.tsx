import { NavLink } from "react-router-dom";

import './Navigation.scss'

interface IMenuItem {
  link: string;
  label: string;
}

const MENU = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/news',
    label: 'News'
  },
]

export function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        {
          MENU.map((item: IMenuItem, index: number) => {
            return(
              <li key={index}>
                <NavLink to={item.link} className={({ isActive }) => isActive ? "navigation__link is-active" : "navigation__link"}>{item.label}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
