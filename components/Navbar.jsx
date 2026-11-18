"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>{site.hoursShort}</span>
          <span className="topbar__mid">{site.location} &middot; {site.serviceMode}</span>
          <a href={`tel:+${site.phoneRaw}`}>{site.phone}</a>
        </div>
      </div>

      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <Link href="/" className="logo" aria-label="Paula Lashes home">
            <span className="logo__mark">P</span>
            <span className="logo__text">
              Paula <em>Lashes</em>
            </span>
          </Link>

          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`navbar__link ${pathname === l.href ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={`tel:+${site.phoneRaw}`} className="navbar__call" aria-label="Call us">
              <FiPhone />
            </a>
            <Link href="/book" className="btn btn--primary btn--sm navbar__book">
              Book Now
            </Link>
            <button
              className="navbar__toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`mobile-menu__link ${pathname === l.href ? "is-active" : ""}`}
              style={{ transitionDelay: open ? `${0.05 * i + 0.1}s` : "0s" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <Link href="/book" className="btn btn--primary btn--block">
            Book Appointment
          </Link>
          <p>{site.hours}</p>
          <p>{site.phone}</p>
        </div>
      </div>
    </>
  );
}
