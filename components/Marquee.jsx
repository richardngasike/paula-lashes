import { PiSparkleFill } from "react-icons/pi";

const items = [
  "Individual Extensions",
  "Lash Clusters",
  "Volume Lashes",
  "Gel Polish",
  "Acrylics",
  "Nail Art",
  "Spa Pedicure",
  "Lash Lift",
  "Outcall Service",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t} <PiSparkleFill />
          </span>
        ))}
      </div>
    </div>
  );
}
