import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import FeaturesSection from 'components/FeaturesSection';
import CTA from 'components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Awesome Landing Page</title>
        <meta name="description" content="A modern landing page built with Next.js" />
      </Head>
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTA />
      </main>
    </>
  );
}