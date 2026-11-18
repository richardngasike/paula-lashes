import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ImageBox from "./ImageBox";
import { whatsappLink } from "@/data/site";

export default function CtaBand({
  title = "Ready for your next glow up?",
  text = "Book your lash or nail appointment today. Visit our Ruaka studio or let us come to you.",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band__card">
          <div className="cta-band__media">
            <ImageBox src="/cta.png" alt="Paula Lashes appointment" sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className="cta-band__content">
            <span className="eyebrow eyebrow--light">Book Today</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <Link href="/book" className="btn btn--light">Book Appointment</Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--outline-light">
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
