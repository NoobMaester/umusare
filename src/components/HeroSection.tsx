import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to My Awesome Product</h1>
        <p>Your solution to all problems!</p>
        <Link href="/register" className="cta-button">
          Get Started
        </Link>
      </div>
    </section>
  );
}
