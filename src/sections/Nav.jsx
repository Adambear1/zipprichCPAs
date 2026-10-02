import React from "react";
import { firm } from "../content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#airline-crew", label: "Airline Crew" },
  { href: "#process", label: "How It Works" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          Zipprich <span>CPAs</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--small btn--light"
            href={firm.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Login
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
