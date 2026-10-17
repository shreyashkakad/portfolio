import { social } from "../data/socialLinks.js";
import { LinkedinIcon, MailIcon, InstagramIcon } from "../components/Icons.jsx";

const items = [
  { key: "linkedin", icon: <LinkedinIcon /> },
  { key: "email", icon: <MailIcon /> },
  { key: "instagram", icon: <InstagramIcon /> },
];

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shreyash Kakad</p>
      <ul>
        {items.filter((i) => social[i.key]).map((i) => (
          <li key={i.key}>
            <a
              href={social[i.key].href}
              {...(i.key !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {i.icon} {social[i.key].label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
