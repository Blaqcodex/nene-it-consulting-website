import Hero from "../components/Hero";
import SectionDivider from "../components/SectionDivider";
import Services from "../components/Services";
import About from "../components/About";
import Stats from "../components/Stats";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />

      <Services />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Stats />

      <CallToAction />

      <Footer />
    </>
  );
}