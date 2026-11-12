import BackToTop from "@/components/back-to-top";
import ScrollFX from "@/components/scroll-fx";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Results from "@/components/sections/results";
import Training from "@/components/sections/training";

export default function Page() {
  return (
    <>
      <ScrollFX />
      <BackToTop />
      <Hero />
      <About />
      <Features />
      <Training />
      <Results />
      <Faq />
      <Contact />
    </>
  );
}
