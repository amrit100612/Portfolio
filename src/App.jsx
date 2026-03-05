import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsSection from './components/SkillsSection'
import Projects from './components/Projects'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
