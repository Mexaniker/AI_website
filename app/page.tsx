import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Advantages from '@/components/Advantages';
import Cases from '@/components/Cases';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Cases />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
