import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { nailServices } from "@/data/site";

export const metadata = {
  title: "Nail Services",
  description:
    "Gel polish, acrylics, builder gel, gel-x, nail art, manicures and pedicures in Ruaka. Incall and outcall available.",
};

const shapes = [
  { name: "Almond", image: "/shape-almond.png" },
  { name: "Coffin", image: "/shape-coffin.png" },
  { name: "Square", image: "/shape-square.png" },
  { name: "Stiletto", image: "/shape-stiletto.png" },
  { name: "Oval", image: "/shape-oval.png" },
];

const trends = [
  { title: "Chrome & Glazed", image: "/trend-chrome.png" },
  { title: "Soft French", image: "/trend-french.png" },
  { title: "3D Charms", image: "/trend-3d.png" },
];

export default function NailsPage() {
  return (
    <>
      <PageHero
        crumb="Nails"
        eyebrow="Nail Bar"
        title="Nails that finish every look"
        text="Gel polish, acrylics, builder gel, nail art, manicures and pedicures, all done to last."
        image="/nails-hero.png"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Nail Menu"
            title="Hands and feet, perfected"
            text="From clean natural manicures to bold sculpted acrylics, choose the service that fits your style."
          />
          <div className="card-grid">
            {nailServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Shapes" title="Pick your perfect shape" />
          <div className="shape-row">
            {shapes.map((s) => (
              <div className="shape" key={s.name}>
                <ImageBox src={s.image} alt={`${s.name} nail shape`} className="shape__img" sizes="160px" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading-row">
            <SectionHeading eyebrow="Trending Now" title="Designs clients are loving" align="left" />
            <Link href="/gallery" className="btn btn--ghost">See Gallery</Link>
          </div>
          <div className="trend-grid">
            {trends.map((t) => (
              <div className="trend" key={t.title}>
                <ImageBox src={t.image} alt={t.title} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="trend__label">
                  <h3>{t.title}</h3>
                  <Link href={`/book?service=${encodeURIComponent("Nail Art & Design")}`} className="text-link text-link--light">
                    Book this <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split">
          <div className="split__content">
            <span className="eyebrow eyebrow--light">Pedicure Ritual</span>
            <h2 className="h2 h2--light">Soft feet, <em>happy you</em></h2>
            <p className="lead lead--light">
              Our luxury spa pedicure includes a warm soak, scrub, callus care, mask, hot towel wrap and a
              relaxing massage, finished with your choice of polish or gel. Available in studio or at home.
            </p>
            <Link href={`/book?service=${encodeURIComponent("Luxury Spa Pedicure")}`} className="btn btn--light">
              Book Pedicure
            </Link>
          </div>
          <div className="split__media">
            <ImageBox src="/pedicure-feature.png" alt="Luxury spa pedicure" className="tall-img" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <CtaBand title="Treat your hands and feet" />
    </>
  );
}
