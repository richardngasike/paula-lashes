import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import { site, whatsappLink } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Paula Lashes in Ruaka. Call, WhatsApp or email us. Open Monday to Sunday, 8:00 AM - 7:00 PM.",
};

export default function ContactPage() {
  const cards = [
    { icon: FiPhone, title: "Call Us", value: site.phone, href: `tel:+${site.phoneRaw}` },
    { icon: FaWhatsapp, title: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
    { icon: FiMail, title: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: FiClock, title: "Working Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="We would love to hear from you"
        text="Questions, bookings or group events. Reach out any day of the week."
        image="/contact-hero.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="contact-cards">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="icon-circle"><c.icon /></span>
                  <h3>{c.title}</h3>
                  <p>{c.value}</p>
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="contact-card" {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="contact-card">{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split split--top">
          <div className="split__content">
            <span className="eyebrow">Find Us</span>
            <h2 className="h2">Ruaka, <em>Kenya</em></h2>
            <p className="lead">
              Visit our studio in Ruaka or book an outcall. We serve Ruaka and surrounding areas.
            </p>
            <div className="areas areas--light">
              {site.areas.map((a) => <span className="areas__chip" key={a}>{a}</span>)}
            </div>
            <div className="btn-row">
              <Link href="/book" className="btn btn--primary">Book Now <FiArrowRight /></Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Paula Lashes location, Ruaka"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map__pin"><FiMapPin /> {site.location}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div className="split__media">
            <ImageBox src="/contact-side.png" alt="Paula Lashes studio" className="tall-img" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="split__content">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="left" />
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
