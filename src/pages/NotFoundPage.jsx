import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-panel">
        <p className="not-found-kicker">404</p>
        <h1>That page is not in the portfolio.</h1>
        <p>
          The link may be outdated, mistyped, or moved. Head back to the work
          library or the homepage to keep browsing.
        </p>
        <div className="not-found-actions">
          <Link to="/work">View Work</Link>
          <Link to="/" className="not-found-secondary">Go Home</Link>
        </div>
      </section>
    </main>
  );
}
