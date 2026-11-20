import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-x max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-ink-soft">The page you are looking for doesn&apos;t exist or may have moved.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/bridal" className="btn btn-outline">Bridal &amp; packages</Link>
        </div>
      </div>
    </section>
  );
}
