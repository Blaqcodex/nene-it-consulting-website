import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BackgroundGlow from "./components/BackgroundGlow";
import "./styles/globals.css";

function App() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

export default App;