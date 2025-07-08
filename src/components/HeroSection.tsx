import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24 px-4 md:px-12 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
      <div className="z-10 flex-1 flex flex-col items-start max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Get Home Safe—Hire a Trusted Driver</h1>
        <p className="mb-6 text-lg md:text-xl text-blue-100">On-demand, vetted freelance drivers to get you and your car home safely—especially when you can't drive yourself.</p>
        <a href="#how-it-works" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200">Get Started</a>
      </div>
      <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0">
        <Image
          src="/city-night-car-hero.svg"
          alt="City at night with car and driver"
          width={480}
          height={360}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
