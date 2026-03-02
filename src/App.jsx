import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import DsaSection from './components/DsaSection'
import SkillsSection from './components/SkillsSection'
import ExperienceJourneySection from './components/ExperienceJourneySection'
import LearningTrackerSection from './components/LearningTrackerSection'
import BlogSection from './components/BlogSection'
import InterviewRoadmapSection from './components/InterviewRoadmapSection'
import ResumeTipsSection from './components/ResumeTipsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_48%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_38%)]" />
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <DsaSection />
        <SkillsSection />
        <ExperienceJourneySection />
        <LearningTrackerSection />
        <BlogSection />
        <InterviewRoadmapSection />
        <ResumeTipsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
