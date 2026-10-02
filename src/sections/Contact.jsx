import React from "react";
import { firm } from "../content";

function Contact() {
  return (
    <section className="section section--tint" id="contact">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about your taxes.</h2>
          <p className="section__lead">
            Call or email us to set up a consultation. If you're already a client, log in to your
            secure portal to upload documents or download past returns.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${firm.email}`}>
              Email us
            </a>
            <a
              className="btn btn--outline"
              href={firm.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Client login
            </a>
          </div>
        </div>

        <dl className="contact__card card">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={firm.phoneHref}>{firm.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${firm.email}`}>{firm.email}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Contact;
