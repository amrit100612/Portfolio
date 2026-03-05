import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
