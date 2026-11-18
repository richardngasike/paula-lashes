import { FiClock, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import ImageBox from "@/components/ImageBox";
import BookingForm from "@/components/BookingForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Book Appointment",
  description: "Book lash extensions or nail services at Paula Lashes, Ruaka. Incall and outcall available.",
};

export default async function BookPage({ searchParams }) {
  const params = (await searchParams) || {};
  const service = typeof params.service === "string" ? params.service : "";
  const mode = params.mode === "Outcall" ? "Outcall" : "Incall";

  return (
    <>
      <PageHero
        crumb="Book"
        eyebrow="Appointments"
        title="Book your appointment"
        text="Send us your details and we will confirm your slot on WhatsApp."
        image="/book-hero.png"
      />

      <section className="section">
        <div className="container book">
          <div className="book__form">
            <h2 className="h3">Booking request</h2>
            <p className="muted">Fill in the form below. Your request opens in WhatsApp so we can confirm instantly.</p>
            <BookingForm initialService={service} initialMode={mode} />
          </div>

          <aside className="book__side">
            <ImageBox src="/book-side.png" alt="Paula Lashes appointment" className="book__img" sizes="(max-width: 900px) 100vw, 35vw" />
            <div className="info-card">
              <h3>Studio details</h3>
              <ul className="info-list">
                <li><FiMapPin /><span>{site.location}<br /><small>{site.serviceMode}</small></span></li>
                <li><FiClock /><span>{site.hours}</span></li>
                <li><FiPhone /><a href={`tel:+${site.phoneRaw}`}>{site.phone}</a></li>
                <li><FiMail /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
