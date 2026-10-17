import { ArrowUpRight } from "./Icons.jsx";

export default function Button({ href, children, icon, external = false, variant = "dark" }) {
  return (
    <a
      className={`btn btn--${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
      {external && <ArrowUpRight />}
    </a>
  );
}
