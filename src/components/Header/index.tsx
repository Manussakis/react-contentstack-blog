import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

import './styles.scss';

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
