import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Gallery",
  description: "Lash extensions, nail art, manicures and pedicures by Paula Lashes in Ruaka.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Portfolio"
        title="Our work speaks for itself"
        text="Browse recent lash sets, nail designs and moments from the studio."
        image="/gallery-hero.jpeg"
      />
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand title="Love what you see?" text="Save your favourite look and show it to us at your appointment." />
    </>
  );
}
