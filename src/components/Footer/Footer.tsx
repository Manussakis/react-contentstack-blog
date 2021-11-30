import { useEffect, useState } from "react"
import { IFooterData } from "../../interfaces";
import { getFooterData } from "../../services/contentstack";

import './Footer.scss';

export function Footer() {
  const [footerData, setFooterData] = useState<IFooterData>({} as IFooterData)

  useEffect(() => {
    getFooterData()
    .then((result) => setFooterData(result[0][0]))
    .catch((error) => console.log(error))
  }, []);

  return (
    <footer className="footer">
      <div className="o-container">
        <p className="u-text-center">
          {footerData.colophon}
        </p>
      </div>
    </footer>
  )
}
