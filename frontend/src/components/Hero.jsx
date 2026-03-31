import { motion } from 'framer-motion'
import { RiArrowDownLine, RiDownloadLine, RiCodeSSlashLine } from 'react-icons/ri'
import profileImg from '../assets/profile.jpeg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

function FloatingOrb({ className, style }) {
  return (
    <motion.div
      className={`orb ${className}`}
      animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
      transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
      style={style}
    />
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Orbs */}
      <FloatingOrb
        className="w-96 h-96 opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', top: '10%', left: '5%' }}
      />
      <FloatingOrb
        className="w-80 h-80 opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', bottom: '10%', right: '5%' }}
      />
      <FloatingOrb
        className="w-64 h-64 opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)', top: '50%', right: '20%' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="container-custom px-6 md:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
              
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-bold leading-none mb-4 mt-8"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              <span className="block text-white">Yash</span>
              <span className="block gradient-text">Paithane</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
              <span className="font-mono text-violet-400 text-sm md:text-base tracking-widest uppercase">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-body"
            >
             I design and develop <span className="text-white font-medium">scalable, real-world full stack applications</span> using React, Node.js, and PostgreSQL. From building products like Tripverse to solving practical problems through development and internships, I focus on writing clean code and delivering impactful digital solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiCodeSSlashLine size={18} />
                View Projects
              </motion.button>

              <motion.a
                href="/Yash Paithane's Resume (3).pdf"
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium glass border border-violet-500/20 text-slate-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
              >
                <RiDownloadLine size={18} />
                Download Resume
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            variants={item}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              />

              {/* Image */}
              <motion.img
                src={profileImg}
                alt="Yash Paithane"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-violet-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-violet-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-violet-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}