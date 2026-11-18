import Link from "next/link";
import ImageBox from "@/components/ImageBox";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <ImageBox src="/not-found.png" alt="Page not found" className="not-found__img" sizes="320px" />
        <span className="eyebrow">Error 404</span>
        <h1 className="h2">This page went for a <em>refill</em></h1>
        <p className="lead">The page you are looking for does not exist or has been moved.</p>
        <div className="btn-row btn-row--center">
          <Link href="/" className="btn btn--primary">Back Home</Link>
          <Link href="/book" className="btn btn--ghost">Book Appointment</Link>
        </div>
      </div>
    </section>
  );
}
