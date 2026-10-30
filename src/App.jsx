import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Freelance from "./components/Freelance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import ProjectDetails from "./components/ProjectDetails";
import MouseEffect from "./components/MouseEffect";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Mouse Effect */}
      <MouseEffect />

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.045]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Purple Glow */}
      <div className="pointer-events-none fixed left-[35%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none fixed bottom-[5%] right-[-150px] -z-10 h-[450px] w-[450px] rounded-full bg-purple-700/[0.06] blur-[140px]" />

      {/* Navbar */}
      <Navbar />

      {/* Music */}
      <MusicPlayer />

      {/* Main */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Main Portfolio */}
      <Route path="/" element={<Portfolio />} />

      {/* Project Details */}
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  );
};

export default App;
