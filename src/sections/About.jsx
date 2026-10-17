import Sticker from "../components/Sticker.jsx";
import Polaroid from "../components/Polaroid.jsx";
import { skills, currently } from "../data/skills.js";
import { profile } from "../data/socialLinks.js";
import setup from "../assets/images/setup.jpg";

// Optional second polaroid: drop a file named extra.gif / extra.png / extra.jpg / extra.webp
// into src/assets/images/ and it appears automatically. No file, no polaroid.
const extras = import.meta.glob("../assets/images/extra.{gif,png,jpg,jpeg,webp}", { eager: true, import: "default" });
const extra = Object.values(extras)[0];

export default function About() {
  return (
    <section id="about" className="about">
      <p className="label-hand">about me!</p>

      <div className={`about__grid ${extra ? "about__grid--two" : ""}`}>
        <Polaroid src={setup} alt="My desk: a laptop showing a black-and-white manga wallpaper, a mechanical keyboard, and a can of Coke in the foreground." caption="my workspace" tilt={-3} tape="blue" />

        <div className="about__body">
          <h2 className="boxed">what's up</h2>
          <p className="about__text">{profile.bio}</p>
          <p className="about__edu">{profile.education}</p>

          <ul className="about__stickers" aria-label="Skills">
            {skills.map((s, i) => (
              <li key={s.label}>
                <Sticker color={s.color} tilt={s.tilt} phase={i}>{s.label}</Sticker>
              </li>
            ))}
          </ul>

          <aside className="note" aria-label="Currently">
            <h3>right now</h3>
            <ul>
              {currently.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </aside>
        </div>

        {extra && <Polaroid src={extra} alt="Extra picture" caption="1 of 1" tilt={3} tape="yellow" />}
      </div>
    </section>
  );
}
