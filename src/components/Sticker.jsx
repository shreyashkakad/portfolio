// Torn-edge label. The zig-zag outline is a clip-path built once per phase.
const cache = {};
function torn(phase = 0) {
  if (cache[phase]) return cache[phase];
  const n = 16;
  const pts = [];
  const j = (i) => ((i + phase) % 2 ? 0 : 5);
  for (let i = 0; i <= n; i++) pts.push(`${(i / n) * 100}% ${j(i)}%`);
  for (let i = 0; i <= 4; i++) pts.push(`${100 - j(i + 1) * 0.5}% ${(i / 4) * 100}%`);
  for (let i = n; i >= 0; i--) pts.push(`${(i / n) * 100}% ${100 - j(i + 1)}%`);
  for (let i = 4; i >= 0; i--) pts.push(`${j(i) * 0.5}% ${(i / 4) * 100}%`);
  return (cache[phase] = `polygon(${pts.join(",")})`);
}

export default function Sticker({ children, color = "yellow", tilt = 0, phase = 0, index = 0, className = "", ...rest }) {
  return (
    <span
      className={`sticker sticker--${color} ${className}`}
      style={{ "--tilt": `${tilt}deg`, "--i": index, clipPath: torn(phase) }}
      {...rest}
    >
      {children}
    </span>
  );
}
