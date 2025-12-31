import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <AboutSection/>
      
      {/* <FeaturedProject /> */}
      <ProjectsGrid />
      <ExperienceSection />
      
      <ContactSection />
    </div>
  );
}
