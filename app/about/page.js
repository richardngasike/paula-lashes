import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { PiHeartLight, PiShieldCheckLight, PiSparkleLight, PiUsersThreeLight } from "react-icons/pi";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
  description: "Meet Paula Lashes, a professional eyelash and nail studio in Ruaka offering incall and outcall services.",
};

const values = [
  { icon: PiHeartLight, title: "Client First", text: "Every appointment starts with listening to what you want and what suits you." },
  { icon: PiShieldCheckLight, title: "Safety & Hygiene", text: "Sterilised tools, fresh disposables and patch tests whenever needed." },
  { icon: PiSparkleLight, title: "Detail Obsessed", text: "Precise isolation, clean cuticles and finishes that last." },
  { icon: PiUsersThreeLight, title: "Warm Experience", text: "A calm, friendly space where you can truly relax and unwind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Beauty, crafted with care"
        text="A lash and nail studio in Ruaka built on skill, hygiene and genuine love for making women feel beautiful."
        image="/about-hero.png"
      />

      <section className="section">
        <div className="container split">
          <div className="split__media about-stack">
            <ImageBox src="/about.jpg" alt="Paula Lashes studio" className="about-stack__main" sizes="(max-width: 900px) 100vw, 40vw" />
            <ImageBox src="/about-2.jpg" alt="Lash artist at work" className="about-stack__small" sizes="240px" />
          </div>
          <div className="split__content">
            <span className="eyebrow">Who We Are</span>
            <h2 className="h2">Hi, welcome to <em>Paula Lashes</em></h2>
            <p className="lead">{site.description}</p>
            <p>
              We believe beautiful lashes and nails should feel effortless. Whether you want a soft natural
              set for the office, a dramatic volume look for the weekend, or a full bridal beauty experience,
              we take the time to understand your style and deliver a result you will love.
            </p>
            <ul className="check-list">
              <li><FiCheck /> Open Monday to Sunday, 8:00 AM - 7:00 PM</li>
              <li><FiCheck /> Studio in Ruaka plus outcall to surrounding areas</li>
              <li><FiCheck /> Lashes, nails, brows and bridal packages</li>
            </ul>
            <Link href="/book" className="btn btn--primary">Book With Us <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="icon-circle"><v.icon /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Inside The Studio"
            title="A space designed for you"
            text="Soft lighting, comfortable beds and a calm atmosphere for your lash and nail appointments."
          />
          <div className="studio-grid">
            <ImageBox src="/studio-1.png" alt="Studio lounge" className="studio-grid__a" sizes="(max-width: 768px) 100vw, 50vw" />
            <ImageBox src="/studio-2.png" alt="Lash bed" className="studio-grid__b" sizes="(max-width: 768px) 50vw, 25vw" />
            <ImageBox src="/studio-3.png" alt="Nail station" className="studio-grid__c" sizes="(max-width: 768px) 50vw, 25vw" />
            <ImageBox src="/studio-4.png" alt="Products" className="studio-grid__d" sizes="(max-width: 768px) 50vw, 25vw" />
            <ImageBox src="/studio-5.png" alt="Outcall kit" className="studio-grid__e" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split">
          <div className="split__content">
            <span className="eyebrow eyebrow--light">Meet The Artist</span>
            <h2 className="h2 h2--light">Paula, <em>founder &amp; lead artist</em></h2>
            <p className="lead lead--light">
              Paula started Paula Lashes with a simple goal: give every woman in Ruaka access to premium lash
              and nail services in a space that feels welcoming. Update this section with your personal story,
              training and what inspires your work.
            </p>
            <Link href="/gallery" className="btn btn--light">See Our Work</Link>
          </div>
          <div className="split__media">
            <ImageBox src="/founder.png" alt="Paula, founder of Paula Lashes" className="tall-img" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
