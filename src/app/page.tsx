import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Comparison />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
