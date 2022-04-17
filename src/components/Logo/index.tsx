import { useEffect, useState } from "react";
import { getHomepageData } from "../../services/contentstack";

import './styles.scss';

export function Logo() {
  const [siteName, setSiteName] = useState("");

  useEffect(() => {
    getHomepageData()
      .then((result) => setSiteName(result[0][0].title))
      .catch((error) => console.log(error));
  }, []);
  return (
    <a className="logo" href="/">{siteName}</a>
  )
}
