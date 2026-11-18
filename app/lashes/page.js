import Link from "next/link";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { lashServices } from "@/data/site";

export const metadata = {
  title: "Lash Extensions",
  description:
    "Individual lash extensions, clusters, hybrid, volume, refills, removal and lash lifts in Ruaka. Incall and outcall available.",
};

const styles = [
  { name: "Natural", image: "/style-natural.png", text: "Soft and subtle" },
  { name: "Cat Eye", image: "/style-cat-eye.png", text: "Lifted outer corners" },
  { name: "Doll Eye", image: "/style-doll-eye.png", text: "Open and rounded" },
  { name: "Wispy", image: "/style-wispy.png", text: "Spiky and textured" },
];

const dos = [
  "Keep lashes dry for the first 24 hours",
  "Brush lashes daily with a clean spoolie",
  "Cleanse with an oil-free lash shampoo",
  "Book refills every 2 to 3 weeks",
];
const donts = [
  "Do not pull or pick at extensions",
  "Avoid oil-based makeup and removers",
  "Do not use mascara or lash curlers",
  "Avoid saunas and steam in the first 48 hours",
];

export default function LashesPage() {
  return (
    <>
      <PageHero
        crumb="Lashes"
        eyebrow="Lash Studio"
        title="Lash extensions, made for your eyes"
        text="Individual extensions, clusters, refills, removal and cleaning, all done with precision and care."
        image="/lashes-hero.jpg"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Lash Menu"
            title="Choose your lash look"
            text="Every set is customised to your eye shape, natural lash health and the look you love."
          />
          <div className="card-grid">
            {lashServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Lash Mapping" title="Find your signature style" />
          <div className="style-grid">
            {styles.map((s) => (
              <div className="style-card" key={s.name}>
                <ImageBox src={s.image} alt={`${s.name} lash style`} sizes="(max-width: 600px) 50vw, 25vw" />
                <div className="style-card__body">
                  <h3>{s.name}</h3>
                  <span>{s.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <ImageBox src="/lash-aftercare.png" alt="Lash aftercare" className="tall-img" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="split__content">
            <span className="eyebrow">Aftercare</span>
            <h2 className="h2">Love your lashes <em>longer</em></h2>
            <p className="lead">Simple habits that keep your set full, clean and beautiful between refills.</p>
            <div className="care-grid">
              <div className="care care--do">
                <h3>Do</h3>
                <ul>{dos.map((d) => <li key={d}><FiCheck /> {d}</li>)}</ul>
              </div>
              <div className="care care--dont">
                <h3>Avoid</h3>
                <ul>{donts.map((d) => <li key={d}><FiX /> {d}</li>)}</ul>
              </div>
            </div>
            <Link href="/book" className="btn btn--primary">Book Lashes <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <CtaBand title="Ready for fluttery lashes?" />
    </>
  );
}
