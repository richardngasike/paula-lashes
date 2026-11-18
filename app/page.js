import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiMapPin, FiHome, FiTruck } from "react-icons/fi";
import { PiEyeLight, PiHandLight, PiSparkleFill, PiShieldCheckLight, PiCertificateLight, PiDropLight, PiCarProfileLight } from "react-icons/pi";
import ImageBox from "@/components/ImageBox";
import VideoBox from "@/components/VideoBox";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site, lashServices, nailServices, packages, gallery, whyUs, steps } from "@/data/site";

const whyIcons = [PiCertificateLight, PiDropLight, PiShieldCheckLight, PiCarProfileLight];

export default function HomePage() {
  const featured = [
    lashServices[0],
    lashServices[2],
    lashServices[5],
    nailServices[0],
    nailServices[4],
    nailServices[3],
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__blob hero__blob--one" />
        <div className="hero__blob hero__blob--two" />
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">
              <PiSparkleFill /> Eyelash &amp; Nail Salon in Ruaka
            </span>
            <h1 className="hero__title">
              Lashes that <em>flutter</em>.<br />
              Nails that <em>speak</em>.
            </h1>
            <p className="hero__text">{site.description}</p>
            <div className="btn-row">
              <Link href="/book" className="btn btn--primary">
                Book Appointment <FiArrowRight />
              </Link>
              <Link href="/pricing" className="btn btn--ghost">
                View Prices
              </Link>
            </div>
            <ul className="hero__facts">
              <li>
                <FiClock />
                <div>
                  <strong>Open Daily</strong>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
              </li>
              <li>
                <FiMapPin />
                <div>
                  <strong>Ruaka, Kenya</strong>
                  <span>Incall &amp; Outcall</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <ImageBox src="/hero.jpeg" alt="Paula Lashes lash extensions" className="hero__main" priority sizes="(max-width: 900px) 100vw, 45vw" />
            <ImageBox src="/hero-nails.jpg" alt="Paula Lashes nail art" className="hero__small" sizes="200px" />
            <div className="hero__badge">
              <PiEyeLight />
              <div>
                <strong>Lash Studio</strong>
                <span>Individual &amp; Clusters</span>
              </div>
            </div>
            <div className="hero__badge hero__badge--two">
              <PiHandLight />
              <div>
                <strong>Nail Bar</strong>
                <span>Gel, Acrylics &amp; Pedicure</span>
              </div>
            </div>
            <div className="hero__ring" />
          </div>
        </div>
      </section>

      <Marquee />

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Two crafts. One beautiful you."
            text="From fluttery lash sets to flawless nails, everything we do is designed to make you feel confident and put together."
          />
          <div className="category-grid">
            <Link href="/lashes" className="category-card">
              <ImageBox src="/category-lashes.jpg" alt="Lash extensions" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="category-card__overlay" />
              <div className="category-card__content">
                <span className="category-card__count">{lashServices.length} services</span>
                <h3>Lash Extensions</h3>
                <p>Individual, hybrid, volume, clusters, refills, removal and lash lifts.</p>
                <span className="category-card__cta">Explore Lashes <FiArrowRight /></span>
              </div>
            </Link>
            <Link href="/nails" className="category-card">
              <ImageBox src="/category-nails.jpg" alt="Nail services" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="category-card__overlay" />
              <div className="category-card__content">
                <span className="category-card__count">{nailServices.length} services</span>
                <h3>Nail Services</h3>
                <p>Gel polish, acrylics, builder gel, nail art, manicures and pedicures.</p>
                <span className="category-card__cta">Explore Nails <FiArrowRight /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section section--tint">
        <div className="container split">
          <div className="split__media about-stack">
            <ImageBox src="/about.jpg" alt="Paula Lashes studio" className="about-stack__main" sizes="(max-width: 900px) 100vw, 40vw" />
            <ImageBox src="/about-2.jpg" alt="Lash artist at work" className="about-stack__small" sizes="240px" />
            <div className="about-stack__tag">
              <strong>7</strong>
              <span>days a week<br />for you</span>
            </div>
          </div>
          <div className="split__content">
            <span className="eyebrow">About Paula Lashes</span>
            <h2 className="h2">A calm, beautiful space where <em>details matter</em>.</h2>
            <p className="lead">
              Paula Lashes is a lash and nail studio based in Ruaka. We combine careful technique, premium
              products and a relaxed experience so every client walks out feeling her best.
            </p>
            <ul className="check-list">
              <li><FiCheck /> Lash extensions tailored to your eye shape</li>
              <li><FiCheck /> Long-lasting gel, acrylic and builder gel nails</li>
              <li><FiCheck /> Incall at our studio or outcall to your door</li>
              <li><FiCheck /> Open every day, 8:00 AM to 7:00 PM</li>
            </ul>
            <Link href="/about" className="btn btn--primary">
              Our Story <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section">
        <div className="container">
          <div className="heading-row">
            <SectionHeading
              eyebrow="Signature Services"
              title="Client favourites"
              text="Our most-booked lash and nail treatments."
              align="left"
            />
            <Link href="/pricing" className="btn btn--ghost">Full Price List</Link>
          </div>
          <div className="card-grid">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* INCALL / OUTCALL */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Your Choice"
            title="Come to us, or we come to you"
            text="Enjoy our studio experience in Ruaka or book an outcall at your home, office or event venue."
            light
          />
          <div className="mode-grid">
            <div className="mode-card">
              <ImageBox src="/incall.png" alt="Incall studio service" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="mode-card__body">
                <span className="mode-card__icon"><FiHome /></span>
                <h3>Incall Studio</h3>
                <p>Relax in our clean, comfortable studio in Ruaka with soft music, good lighting and full attention on you.</p>
                <Link href="/book?mode=Incall" className="text-link">Book Incall <FiArrowRight /></Link>
              </div>
            </div>
            <div className="mode-card">
              <ImageBox src="/outcall.png" alt="Outcall home service" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="mode-card__body">
                <span className="mode-card__icon"><FiTruck /></span>
                <h3>Outcall Service</h3>
                <p>We bring a fully equipped, sanitised kit to your location. Perfect for busy schedules, brides and group bookings.</p>
                <Link href="/book?mode=Outcall" className="text-link">Book Outcall <FiArrowRight /></Link>
              </div>
            </div>
          </div>
          <div className="areas">
            <span>Serving:</span>
            {site.areas.map((a) => (
              <span className="areas__chip" key={a}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container why">
          <div className="why__col">
            {whyUs.slice(0, 2).map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <div className="why__item" key={w.title}>
                  <span className="icon-circle"><Icon /></span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              );
            })}
          </div>
          <div className="why__center">
            <VideoBox src="/why-us.mp4" label="Why choose Paula Lashes" />
            <div className="why__label">
              <span className="eyebrow">Why Paula Lashes</span>
              <h2 className="h2">Beauty you can <em>trust</em></h2>
            </div>
          </div>
          <div className="why__col">
            {whyUs.slice(2).map((w, i) => {
              const Icon = whyIcons[i + 2];
              return (
                <div className="why__item" key={w.title}>
                  <span className="icon-circle"><Icon /></span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="How It Works" title="Booking is easy" />
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Packages"
            title="Beauty bundles made for you"
            text="Save more when you combine lashes and nails, or book for your bridal party and friends."
          />
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
                  <ul>
                    {p.items.map((it) => <li key={it}><FiCheck /> {it}</li>)}
                  </ul>
                  <Link href={`/book?service=${encodeURIComponent(p.title)}`} className={`btn btn--block ${p.featured ? "btn--primary" : "btn--ghost"}`}>
                    Book Package
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section section--tint">
        <div className="container">
          <div className="heading-row">
            <SectionHeading eyebrow="Our Work" title="Fresh from the studio" align="left" />
            <Link href="/gallery" className="btn btn--ghost">View Gallery</Link>
          </div>
          <div className="mosaic">
            {gallery.slice(0, 6).map((g, i) => (
              <div className={`mosaic__item mosaic__item--${i + 1}`} key={g.image}>
                <ImageBox src={g.image} alt={g.label} sizes="(max-width: 768px) 50vw, 33vw" />
                <span className="mosaic__label">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section section--tint">
        <div className="container split split--top">
          <div className="split__content">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Questions, <em>answered</em></h2>
            <p className="lead">Everything you need to know before your appointment.</p>
            <Faq limit={5} />
            <Link href="/contact" className="text-link">More questions? Contact us <FiArrowRight /></Link>
          </div>
          <div className="split__media">
            <ImageBox src="/faq.png" alt="Lash and nail care" className="tall-img" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
