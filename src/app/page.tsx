import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import FeaturesSection from 'components/FeaturesSection';
import WhyChooseUs from 'components/WhyChooseUs';
import Testimonials from 'components/Testimonials';
import CTA from 'components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Umusare Landing Page</title>
        <meta name="description" content="A modern landing page built with Next.js" />
      </Head>
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}