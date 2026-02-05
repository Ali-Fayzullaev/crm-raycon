import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Risks } from "@/components/sections/Risks";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Empathy } from "@/components/sections/Empathy";
import { Plan } from "@/components/sections/Plan";
import { SEOSection } from "@/components/sections/SEOSection";
import { Video } from "@/components/sections/Video";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Risks />
        <ValueProposition />
        <Empathy />
        <Plan />
        <SEOSection />
        <Video />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
