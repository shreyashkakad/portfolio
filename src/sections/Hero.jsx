import Sticker from "../components/Sticker.jsx";
import Button from "../components/Button.jsx";
import { MailIcon } from "../components/Icons.jsx";
import { profile, social } from "../data/socialLinks.js";

function Flower() {
  return (
    <svg className="tag-icon" viewBox="0 0 24 24" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse key={r} cx="12" cy="6.5" rx="3.2" ry="5" fill="#f0488f" transform={`rotate(${r} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="3" fill="#f2c244" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero__hello">my name is</p>

      <div className="name-wrap">
        <Sticker className="pos pos--tl" color="mint" tilt={-4} index={1}>built with java</Sticker>
        <Sticker className="pos pos--tr" color="cream" tilt={3} index={2} phase={1}>sweating the edge cases</Sticker>

        <h1 className="name-frame">
          <span className="name">{profile.name.toUpperCase()}</span>
          <span className="visually-hidden"> Kakad</span>
        </h1>

        <Sticker className="pos pos--bl" color="yellow" tilt={-3} index={3}>{profile.role}</Sticker>
        <Sticker className="pos pos--br" color="mint" tilt={3} index={4} phase={1}>{profile.location}</Sticker>
      </div>

      <div className="hero__chips">
        <Sticker color="yellow" tilt={-2}>{profile.role}</Sticker>
        <Sticker color="mint" tilt={2} phase={1}>{profile.location}</Sticker>
      </div>

      <p className="hero__status"><span className="dot dot--blue" /> Open to backend roles</p>

      <p className="hero__tagline">
        {profile.tagline} <span className="ring" aria-hidden="true" /> <Flower />
      </p>

      {social.email && (
        <Button href={social.email.href} icon={<MailIcon width={12} height={12} />}>Contact me</Button>
      )}

      <svg className="hero__arc" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 38 Q500 -14 1000 30" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </section>
  );
}
