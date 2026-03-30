import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Loader from './components/Loader'

function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + 'px'
        cursorRef.current.style.top = e.clientY - 6 + 'px'
      }
      if (followerRef.current) {
        followerRef.current.style.left = e.clientX - 20 + 'px'
        followerRef.current.style.top = e.clientY - 20 + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experience', 'contact']
    const observers = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [loading])

  return (
    <>
      <CustomCursor />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(15,15,26,0.95)',
            color: '#e2e8f0',
            border: '1px solid rgba(124,58,237,0.3)',
            backdropFilter: 'blur(20px)',
            fontFamily: 'Satoshi, sans-serif',
          },
          success: { iconTheme: { primary: '#a855f7', secondary: '#050508' } },
          error: { iconTheme: { primary: '#ec4899', secondary: '#050508' } },
        }}
      />
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-void min-h-screen noise"
          >
            <Navbar activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <footer className="border-t border-border py-8 text-center">
              <p className="text-slate-500 text-sm font-mono">
                <span className="gradient-text">Yash Paithane</span> · Crafted with{' '}
                <span className="text-pink-500">♥</span> · {new Date().getFullYear()}
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
