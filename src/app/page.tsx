import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Mission from "@/components/Mission";
import Shop from "@/components/Shop";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Mission />
      <Shop />
      <HowItWorks />
      <Reviews />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}
