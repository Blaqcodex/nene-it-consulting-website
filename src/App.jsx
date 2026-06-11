import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BackgroundGlow from "./components/BackgroundGlow";
import About from "./components/About";
import CursorGlow from "./components/CursorGlow";
import Stats from "./components/Stats";
import SectionDivider from "./components/SectionDivider";
import "./styles/globals.css";

function App() {
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
    </>
  );
}

export default App;