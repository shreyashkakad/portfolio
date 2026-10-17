import { useEffect, useState } from "react";
import { social } from "../data/socialLinks.js";
import { GithubIcon, XIcon, MailIcon } from "./Icons.jsx";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="nav">
      <nav className="nav__left" aria-label="Primary">
        <a className="nav__logo" href="#home" aria-label="Shreyash Kakad, home">
          <span />
        </a>
        <div className="nav__tabs">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav__tab" aria-current={active === l.id ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="nav__right">
        {social.x && (
          <a className="nav__dot nav__dot--yellow" href={social.x.href} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <XIcon width={11} height={11} />
          </a>
        )}
        {social.github && (
          <a className="nav__dot nav__dot--green" href={social.github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon width={12} height={12} />
          </a>
        )}
        <a className="nav__contact" href="#contact">
          Contact
        </a>
        <button
          className="nav__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="nav__menu">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
