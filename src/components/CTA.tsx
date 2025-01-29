import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <Link href="/register" className="cta-button">
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
