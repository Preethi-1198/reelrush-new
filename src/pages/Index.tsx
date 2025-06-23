
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WeddingPackages from '@/components/WeddingPackages';
import CreatorPackage from '@/components/CreatorPackage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <WeddingPackages />
      <CreatorPackage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
