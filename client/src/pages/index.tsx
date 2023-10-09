import Hero from '@/components/landing/hero';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
