import { useEffect, useState } from "react";
import { getHomepageData } from "../../services/contentstack";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

import './Header.scss';

export function Header() {
  const [siteName, setSiteName] = useState("");

  useEffect(() => {
    getHomepageData()
      .then((result) => {
        setSiteName(result[0][0].title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}
