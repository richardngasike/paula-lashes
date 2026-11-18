import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { PiEyeLight, PiHandLight } from "react-icons/pi";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { lashServices, nailServices, packages } from "@/data/site";

export const metadata = {
  title: "Pricing",
  description: "Lash extension and nail service prices at Paula Lashes, Ruaka.",
};

function PriceList({ title, icon: Icon, image, items }) {
  return (
    <div className="price-block">
      <div className="price-block__media">
        <ImageBox src={image} alt={title} sizes="(max-width: 900px) 100vw, 40vw" />
        <div className="price-block__head">
          <span className="icon-circle icon-circle--light"><Icon /></span>
          <h3>{title}</h3>
        </div>
      </div>
      <ul className="price-list">
        {items.map((s) => (
          <li key={s.slug}>
            <div>
              <strong>{s.title}</strong>
              <span>{s.duration}</span>
            </div>
            <span className="price-list__dots" />
            <em>KES {s.price.toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="Price List"
        title="Simple, transparent pricing"
        text="Starting prices for our lash and nail services. Outcall transport is quoted based on your location."
        image="/pricing-hero.png"
      />

      <section className="section">
        <div className="container price-grid">
          <PriceList title="Lash Services" icon={PiEyeLight} image="/pricing-lashes.png" items={lashServices} />
          <PriceList title="Nail Services" icon={PiHandLight} image="/pricing-nails.png" items={nailServices} />
        </div>
        <p className="container note">
          Prices are starting prices and may vary with length, design and complexity. Outcall services attract a transport fee.
        </p>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Bundles" title="Packages & combos" />
          <div className="package-grid">
            {packages.map((p) => (
              <article className={`package ${p.featured ? "package--featured" : ""}`} key={p.title}>
                <div className="package__media">
                  <ImageBox src={p.image} alt={p.title} sizes="(max-width: 900px) 100vw, 33vw" />
                  {p.featured && <span className="package__flag">Most Loved</span>}
                </div>
                <div className="package__body">
                  <h3>{p.title}</h3>
                  <p className="package__price"><small>From</small> KES {p.price.toLocaleString()}</p>
                  <ul>{p.items.map((it) => <li key={it}><FiCheck /> {it}</li>)}</ul>
                  <Link href={`/book?service=${encodeURIComponent(p.title)}`} className={`btn btn--block ${p.featured ? "btn--primary" : "btn--ghost"}`}>
                    Book Package
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
