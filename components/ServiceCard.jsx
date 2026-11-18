import Link from "next/link";
import { FiClock, FiArrowUpRight } from "react-icons/fi";
import ImageBox from "./ImageBox";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__media">
        <ImageBox src={service.image} alt={service.title} sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <span className="service-card__price">From KES {service.price.toLocaleString()}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__text">{service.text}</p>
        <div className="service-card__meta">
          <span><FiClock /> {service.duration}</span>
          <Link href={`/book?service=${encodeURIComponent(service.title)}`} className="service-card__link">
            Book <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
}
