import React from "react";
import { services } from "../content";

function Services() {
  return (
    <section className="section" id="services">
      <div className="container split">
        <div className="section__head">
          <p className="eyebrow">Services</p>
          <h2>Full-service accounting</h2>
          <p className="section__lead">
            Our partners have more than 25 years of experience as CPAs. We send and receive every
            document through secure cloud technology, so you never have to mail, fax or carry
            paperwork to an office.
          </p>
        </div>

        <div className="grid">
          {services.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="checklist">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
