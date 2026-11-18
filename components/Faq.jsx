import { FiPlus } from "react-icons/fi";
import { faqs } from "@/data/site";

export default function Faq({ limit }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details className="faq__item" key={i} open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <FiPlus className="faq__icon" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
