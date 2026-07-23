import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ProjectsGallery } from "./components/ProjectsGallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <ProjectsGallery />
        <About />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;