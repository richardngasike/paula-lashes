import Link from "next/link";
import ImageBox from "./ImageBox";

export default function PageHero({ eyebrow, title, text, image, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <ImageBox src={image} alt={title} priority rounded={false} sizes="100vw" />
        <div className="page-hero__overlay" />
      </div>
      <div className="container page-hero__content">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{crumb}</span>
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
      </div>
    </section>
  );
}
