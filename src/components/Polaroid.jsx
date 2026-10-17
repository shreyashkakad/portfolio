export default function Polaroid({ src, alt, caption, tilt = -2, tape = "yellow" }) {
  return (
    <figure className={`polaroid polaroid--${tape}`} style={{ "--tilt": `${tilt}deg` }}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
