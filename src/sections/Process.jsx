import React from "react";
import { firm, steps } from "../content";

function Process() {
  return (
    <section className="section section--tint" id="process">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">How It Works</p>
          <h2>Secure, paperless tax preparation.</h2>
          <p className="section__lead">
            Our client portal uses 256-bit encryption and runs on multiple data centers for
            redundancy. You can reach your returns and documents any time.
          </p>
        </div>

        <ol className="steps">
          {steps.map((step, i) => (
            <li className="steps__item" key={step.title}>
              <span className="steps__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="center">
          <a
            className="btn btn--primary"
            href={firm.requestAccessUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request client access
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
