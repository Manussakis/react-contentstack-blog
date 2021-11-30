import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="o-container">
        <div className="header__inner">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}
