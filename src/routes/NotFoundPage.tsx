import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main>
      <div className="o-container">
        <p>There's nothing here!</p>
        <p><Link to="./">Go to home</Link></p>
      </div>
    </main>
  )
}
