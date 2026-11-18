import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { site, navLinks, whatsappLink } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" className="logo logo--light">
            <span className="logo__mark">P</span>
            <span className="logo__text">
              Paula <em>Lashes</em>
            </span>
          </Link>
          <p>{site.description}</p>
          <div className="footer__social">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h4 className="footer__title">Explore</h4>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
            <li><Link href="/book">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Services</h4>
          <ul className="footer__list">
            <li><Link href="/lashes">Individual Extensions</Link></li>
            <li><Link href="/lashes">Lash Clusters</Link></li>
            <li><Link href="/lashes">Refills & Removal</Link></li>
            <li><Link href="/nails">Gel Polish</Link></li>
            <li><Link href="/nails">Acrylics & Nail Art</Link></li>
            <li><Link href="/nails">Manicure & Pedicure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Visit Us</h4>
          <ul className="footer__contact">
            <li><FiMapPin /><span>{site.location}<br />{site.serviceMode}</span></li>
            <li><FiClock /><span>{site.hours}</span></li>
            <li><FiPhone /><a href={`tel:+${site.phoneRaw}`}>{site.phone}</a></li>
            <li><FiMail /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Ruaka, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
