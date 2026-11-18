"use client";

import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ImageBox from "./ImageBox";
import { gallery } from "@/data/site";

const filters = [
  { key: "all", label: "All" },
  { key: "lashes", label: "Lashes" },
  { key: "nails", label: "Nails" },
  { key: "studio", label: "Studio" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [index, setIndex] = useState(null);

  const items = active === "all" ? gallery : gallery.filter((g) => g.category === active);
  const current = index !== null ? items[index] : null;

  const step = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <>
      <div className="filters" role="tablist">
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            className={`filters__btn ${active === f.key ? "is-active" : ""}`}
            onClick={() => {
              setActive(f.key);
              setIndex(null);
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {items.map((g, i) => (
          <button className="gallery-grid__item" key={g.image} onClick={() => setIndex(i)} aria-label={`Open ${g.label}`}>
            <ImageBox src={g.image} alt={g.label} sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw" />
            <span className="gallery-grid__label">{g.label}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setIndex(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setIndex(null)}>
            <HiOutlineX />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <FiChevronLeft />
          </button>
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <ImageBox src={current.image} alt={current.label} sizes="90vw" />
            <p>{current.label}</p>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
