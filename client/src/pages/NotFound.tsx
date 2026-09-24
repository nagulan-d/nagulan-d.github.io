import { ArrowUpRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <span className="section-eyebrow">Nagulan D / 404</span>
        <h1>Page not found<span>.</span></h1>
        <p>The page you are looking for does not exist or has moved. Return to the portfolio to explore the work, skills, and experience.</p>
        <a className="primary-button" href="/"><Home size={15} /> Go home <ArrowUpRight size={15} /></a>
      </div>
    </main>
  );
}
