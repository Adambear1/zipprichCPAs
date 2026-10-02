import React from "react";
import { firm } from "../content";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="nav__brand">
            Zipprich <span>CPAs</span>
          </p>
          <p className="small">Also serving flight crews as {firm.crewBrand}.</p>
        </div>
        <div className="footer__links small">
          <a href="https://www.irs.gov/refunds" target="_blank" rel="noopener noreferrer">
            Where's my refund?
          </a>
          <a
            href="https://www.irs.gov/individuals/check-if-you-need-to-file"
            target="_blank"
            rel="noopener noreferrer"
          >
            Do I need to file?
          </a>
          <a href={firm.portalUrl} target="_blank" rel="noopener noreferrer">
            Client login
          </a>
        </div>
      </div>
      <div className="container footer__legal small">
        © {new Date().getFullYear()} {firm.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
