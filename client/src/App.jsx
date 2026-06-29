import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BackgroundGlow from "./components/BackgroundGlow";
import About from "./components/About";
import CursorGlow from "./components/CursorGlow";
import Stats from "./components/Stats";
import SectionDivider from "./components/SectionDivider";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import CommandCenter from "./components/CommandCentre";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import CyberGrid from "./components/CyberGrid";
import "./styles/globals.css";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}

  return (
    <>

      <BackgroundGlow />
      <CursorGlow />
      <Navbar />
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

export default App;