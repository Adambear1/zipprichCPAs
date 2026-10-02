import React from "react";
import { crewPoints } from "../content";

function AirlineCrew() {
  return (
    <section className="section section--dark" id="airline-crew">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow eyebrow--light">Airline Tax Professionals</p>
          <h2>Your CPA should know the airline industry.</h2>
          <p className="section__lead">
            We work in the airline industry ourselves, so we know what flight crews deal with and
            how the tax code applies to them. We have prepared crew tax returns since 2004.
          </p>
        </div>

        <div className="grid grid--3">
          {crewPoints.map((point) => (
            <article className="feature" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>

        <div className="pricing">
          <div>
            <span className="pricing__label">Basic returns</span>
            <span className="pricing__value">from $65</span>
          </div>
          <div>
            <span className="pricing__label">Itemized returns</span>
            <span className="pricing__value">from $135</span>
          </div>
          <a className="btn btn--accent" href="#contact">
            Start your return
          </a>
        </div>
      </div>
    </section>
  );
}

export default AirlineCrew;
