import Link from "next/link";
import { getSiteContent } from "../lib/sanity";

export default async function HomePage() {
  const content = await getSiteContent();

  return (
    <>
      <section className="hero">
        <div>
          <span className="tagline">{content.site.tagline}</span>
          <h1>{content.site.name}</h1>
          <p>{content.site.heroHeadline}</p>
          <p>{content.home.intro}</p>
          <div className="cta-row">
            <Link className="button primary" href="/contact">{content.site.ctaPrimary}</Link>
            <Link className="button secondary" href="#solutions">{content.site.ctaSecondary}</Link>
          </div>
        </div>
        <div className="hero-panel">
          <h2>Storage teams deserve operational confidence.</h2>
          <p>
            peaq combines automation, analytics, and governance to keep complex storage estates
            healthy and compliant. Deploy quickly, integrate deeply, and scale without friction.
          </p>
          <div className="stat-grid">
            <div className="stat">
              <strong>2–3 hours</strong>
              <p>From install to first provisioning</p>
            </div>
            <div className="stat">
              <strong>Cloud-first</strong>
              <p>IOportal analytics anywhere</p>
            </div>
            <div className="stat">
              <strong>Policy-driven</strong>
              <p>Repeatable quality by design</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <h2 className="section-title">Solutions</h2>
        <div className="grid cols-3">
          {content.home.highlights.map((item) => (
            <article key={item.title} className="card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link className="button secondary" href={item.href}>Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2 className="section-title">Designed for enterprise storage</h2>
          <p>
            peaq helps storage engineers and IT leaders align capacity, performance, and cost. Our
            platforms surface actionable insight while automating the operational grind.
          </p>
        </div>
        <div className="card">
          <h3>What you gain</h3>
          <div className="list">
            <span>• Faster provisioning with fewer errors</span>
            <span>• AI-assisted anomaly detection</span>
            <span>• Compliance-ready reporting</span>
            <span>• Transparent cross-charging insights</span>
          </div>
        </div>
      </section>
    </>
  );
}
