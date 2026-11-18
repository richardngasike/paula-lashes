import { FaStar, FaQuoteLeft } from "react-icons/fa";
import ImageBox from "./ImageBox";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Love"
          title="What our clients say"
          text="Real results, real smiles. Here is what clients across Ruaka say about their Paula Lashes experience."
        />
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <figure className="testimonial" key={i}>
              <FaQuoteLeft className="testimonial__quote" />
              <div className="testimonial__stars" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, s) => <FaStar key={s} />)}
              </div>
              <blockquote>{t.text}</blockquote>
              <figcaption className="testimonial__author">
                <ImageBox src={t.image} alt={t.name} className="testimonial__avatar" sizes="64px" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.service}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
