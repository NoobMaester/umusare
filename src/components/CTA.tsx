import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to Get Home Safe?</h2>
        <p className="mb-8 text-lg text-center max-w-2xl">Sign up now or download our app to connect with a trusted freelance driver whenever you need a safe ride home.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/register" className="bg-gray-900 hover:bg-gray-800 text-yellow-300 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 text-center">
            Sign Up Now
          </Link>
          <a href="#" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg border border-gray-300 transition-colors duration-200 text-center">
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}
