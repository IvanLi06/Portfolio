import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;