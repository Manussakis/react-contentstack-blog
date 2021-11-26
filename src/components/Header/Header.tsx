import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">Home</Link> | {" "}
        <Link to="/news">News</Link>
      </div>
    </header>
  )
}
