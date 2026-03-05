import { useEffect, useRef } from 'react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    let typedInstance

    const setupTyping = async () => {
      const Typed = (await import('typed.js')).default
      typedInstance = new Typed(typedRef.current, {
        strings: [
          'Cyber Security Student.',
          'Java Developer.',
          'ML Enthusiast.',
          'Problem Solver.',
        ],
        startDelay: 250,
        typeSpeed: 58,
        backSpeed: 36,
        backDelay: 1200,
        smartBackspace: true,
        cursorChar: '|',
        loop: true,
      })
    }

    setupTyping()

    return () => {
      if (typedInstance) {
        typedInstance.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="classic-panel hero-bg hero-home p-6 sm:p-8">
      <div className="home-content max-w-4xl">
        <h1 className="home-title">HELLO FOLKS !</h1>
        <p className="home-subtitle mt-4 text-base sm:text-xl">
          My name is <strong>Amrit Kumar</strong>. I am a <strong ref={typedRef} id="typed" />
        </p>

        <p className="mt-6 text-sm">
          <a href="#projects" className="font-semibold text-white decoration-white">MY WORKS</a>
          {' | '}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="font-semibold text-white decoration-white">RESUME</a>
        </p>
      </div>
    </section>
  )
}
