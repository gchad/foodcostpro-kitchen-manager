import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ClientLogos from "@/components/landing/ClientLogos";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Stats from "@/components/landing/Stats";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Features />
      <Testimonials />
      <Stats />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
