import "./styles.css";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AirlineCrew from "./sections/AirlineCrew";
import Process from "./sections/Process";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <AirlineCrew />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
