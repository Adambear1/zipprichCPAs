import React from "react";
import { firm, stats } from "../content";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Zipprich CPAs · Airline Tax Professionals</p>
        <h1>
          Tax and accounting for small business
          <br className="hide-sm" /> and people who fly.
        </h1>
        <p className="hero__lead">
          A CPA firm with more than 25 years of experience, run by a CPA who is also an
          airline pilot. All of our tax preparation is secure and paperless, so you can work with
          us from anywhere.
        </p>
        <div className="hero__actions">
          <a className="btn btn--accent" href="#contact">
            Get in touch
          </a>
          <a className="btn btn--ghost" href={firm.phoneHref}>
            Call {firm.phone}
          </a>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
