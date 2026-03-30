import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import webCert from '../assets/cert1.jpeg'
import awsCert from '../assets/cert2.jpeg'
import aiCert from '../assets/cert3.jpeg'
import {
  RiBriefcaseLine, RiAwardLine, RiCodeSSlashLine,
  RiArrowLeftSLine, RiArrowRightSLine,
  RiVerifiedBadgeLine, RiExternalLinkLine
} from 'react-icons/ri'

/* ─────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────── */
const workExperiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Unified Mentor Pvt. Ltd.',
    duration: 'March 2025 – June 2025',
    location: 'Remote',
    description: [
      'Delivered responsive frontends and improved backend API efficiency by 40%, ensuring seamless data flow. Crafted dynamic React.js UI components, improving interactivity and user engagement.',
      'Collaborated on debugging, testing, and optimization to improve performance.',
      'Collaborated with a team of developers to deliver projects on time, adhering to Agile methodologies.',
     
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'GitHub'],
    color: '#7c3aed',
    icon: <RiBriefcaseLine size={16} />,
  },
  {
    title: 'Web Developer',
    company: 'Kalavati Technologies',
    duration: 'Jan 2022 – May 2023',
    location: 'Remote',
    description: [
      'Gained hands-on experience with the complete MERN stack (MongoDB, Express.js, React.js,Node.js) to build end-to-end web applications.',
      'Developed reusable React component libraries that cut development time by 40% across projects.',
      'Worked on both frontend and backend, enhancing understanding of RESTful API design, secure authentication, and dynamic UI/UX.',
    ],
    tech: ['React.js', 'Express.js', 'TypeScript','JavaScript', 'Tailwind', 'Firebase'],
    color: '#06b6d4',
    icon: <RiCodeSSlashLine size={16} />,
  },
  {
    title: 'Full Stack Developer',
    company: 'Freelance / Self-employed',
    duration: 'October 2025 – February 2026',
    location: 'Remote',
    description: [
      'Delivered 5+ projects spanning landing pages, dashboards, and SaaS applications.',
      'Developed reusable React component libraries that cut development time by 40% across projects.',
      'Integrated third-party APIs amd Cloud Platforms (Adzuana API,OpenAI API,Google Cloud API,Amazon Web Services) for 3+ production applications.',
    ],
    tech: ['MERN Stack', 'PERN Stack', 'TypeScript', 'Tailwind', 'AWS', 'Google Cloud', 'OpenAI API', 'Adzuana API'],
    color: '#f59e0b',
    icon: <RiCodeSSlashLine size={16} />,
  },
  
  
]

const certificates = [
   {
    title: 'Full Stack Web Developement Bootcamp',
    subtitle: 'Professional Certificate',
    issuer: 'Udemy',
    date: '2 April 2025',
    credentialId: 'UC-bc0e4509-a5a6-473c-a844-146256826c49',
    color: '#a855f7',
    logo: 'udemy',
    tech: ['MERN Stack','React', 'JavaScript', 'UX Design', 'HTML/CSS','PostgreSQL', 'MongoDB'],
    verifyUrl: 'https://ude.my/UC-bc0e4509-a5a6-473c-a844-146256826c49',
    image: webCert,
  },
  {
    title: 'AWS Cloud Foundation',
    subtitle: 'Associate Level',
    issuer: 'Amazon Web Services',
    date: '14 July 2025',
    credentialId: 'AWS-DEV-2025-8X4K',
    color: '#f59e0b',
    logo: 'AWS',
    tech: ['Lambda', 'S3', 'EC2', 'DynamoDB', 'CloudFormation'],
    verifyUrl: 'https://www.credly.com/go/hZEYomK6',
    image: awsCert,
  },
 
  {
    title: 'Artificial Intelligence Fundamentals',
    subtitle: 'Developer Path',
    issuer: 'IBM',
    date: '22 July 2025',
    
    color: '#10b981',
    logo: 'IBM',
    tech: ['AI Concepts', 'Machine Learning', 'Natural Language Processing', 'AI Agents'],
    verifyUrl: 'https://www.credly.com/badges/67f5287d-8ea7-4632-b193-b4001acbd03f',
    image: aiCert,
  },
]

/* ─────────────────────────────────────────────────
   CERTIFICATE VISUAL CARD
───────────────────────────────────────────────── */
function CertCard({ cert }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #08080f 0%, #0d0d1a 100%)' }}
    >
      {/* SVG grid pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`g-${cert.logo}`} width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke={cert.color} strokeWidth="0.4" strokeOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#g-${cert.logo})`} />
      </svg>

      {/* Radial glows */}
      <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cert.color}55, transparent 70%)`, filter: 'blur(32px)' }} />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cert.color}30, transparent 70%)`, filter: 'blur(32px)' }} />

      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${cert.color} 50%, transparent 100%)` }} />
      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${cert.color}60 50%, transparent 100%)` }} />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[80px] font-display font-black tracking-widest select-none"
          style={{ color: cert.color, opacity: 0.04, letterSpacing: '0.3em' }}>
          CERT
        </span>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">

        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Issuer block */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-white text-[11px] shrink-0"
              style={{
                background: `linear-gradient(135deg, ${cert.color}, ${cert.color}99)`,
                boxShadow: `0 0 18px ${cert.color}55`,
              }}
            >
              {cert.logo}
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{cert.issuer}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: `${cert.color}99` }}>
                Certificate of Completion
              </p>
            </div>
          </div>

          {/* Verified pill */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: `${cert.color}12`,
              border: `1px solid ${cert.color}35`,
            }}
          >
            <RiVerifiedBadgeLine size={12} style={{ color: cert.color }} />
            <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: cert.color }}>
              Verified
            </span>
          </div>
        </div>

        {/* Center — title */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60)` }} />
            <RiAwardLine size={20} style={{ color: cert.color }} />
            <div className="h-px w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${cert.color}60, transparent)` }} />
          </div>
          <h3
            className="font-display font-bold text-white leading-tight mb-1"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}
          >
            {cert.title}
          </h3>
          <p className="text-sm font-body" style={{ color: `${cert.color}bb` }}>{cert.subtitle}</p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Credential ID</p>
            <p className="text-xs font-mono text-slate-300">{cert.credentialId}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Issued</p>
            <p className="text-xs font-mono" style={{ color: cert.color }}>{cert.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   CERTIFICATES SLIDER
───────────────────────────────────────────────── */
const VARIANTS = {
  enter: (dir) => ({
    x: dir > 0 ? '55%' : '-55%',
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? 8 : -8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (dir) => ({
    x: dir > 0 ? '-55%' : '55%',
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? -8 : 8,
  }),
}

function CertificatesSlider({ inView }) {
  const [[active, dir], setActive] = useState([0, 0])
  const total = certificates.length
  const cert = certificates[active]
  const [selectedCert, setSelectedCert] = useState(null)

  const go = (d) => setActive(([prev]) => [(prev + d + total) % total, d])

  // Auto-slide every 4.5 s
  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => go(1), 4500)
    return () => clearInterval(id)
  }, [inView, active])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      {/* Sub-heading */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #f59e0b22, #a855f722)' }}>
          <RiAwardLine size={16} className="text-amber-400" />
        </div>
        <div>
          <h3 className="text-white font-display font-semibold text-lg">Certifications</h3>
          <p className="text-slate-500 text-xs font-mono">{total} professional credentials</p>
        </div>
      </div>

      {/* Card slider */}
      <div className="relative" style={{ perspective: '1200px' }}>
        {/* Overflow clip */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
            >
              <div onClick={() => setSelectedCert(cert)} className="cursor-pointer">
            <CertCard cert={cert} />
            </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next buttons */}
        {[{ d: -1, Icon: RiArrowLeftSLine, side: 'left-3' }, { d: 1, Icon: RiArrowRightSLine, side: 'right-3' }].map(({ d, Icon, side }) => (
          <button
            key={side}
            onClick={() => go(d)}
            className={`absolute ${side} top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95`}
            style={{
              background: 'rgba(8,8,15,0.75)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {/* Details card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`det-${active}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-4 glass rounded-2xl p-5 border border-border"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="font-display font-semibold text-white leading-tight">{cert.title}</h4>
              <p className="text-sm mt-0.5" style={{ color: cert.color }}>
                {cert.issuer} &nbsp;·&nbsp; {cert.date}
              </p>
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
              style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
            >
              <RiExternalLinkLine size={12} />
              Verify
            </a>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cert.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
                style={{ background: `${cert.color}10`, color: `${cert.color}bb`, border: `1px solid ${cert.color}20` }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot + progress indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {certificates.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive([i, i > active ? 1 : -1])}
            className="rounded-full transition-all duration-400"
            style={{
              height: 8,
              width: i === active ? 28 : 8,
              background: i === active
                ? `linear-gradient(90deg, ${cert.color}, ${cert.color}88)`
                : 'rgba(255,255,255,0.12)',
              boxShadow: i === active ? `0 0 10px ${cert.color}50` : 'none',
            }}
          />
        ))}
      </div>
      <AnimatePresence>
  {selectedCert && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCert(null)}
    >
      <motion.img
        src={selectedCert.image}
        alt="Certificate"
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border border-white/10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Close button */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────
   TIMELINE ITEM  (unchanged from original)
───────────────────────────────────────────────── */
function TimelineItem({ exp, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex gap-8 mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[calc(50%-2rem)] glass rounded-2xl p-6 border border-border hover:border-violet-500/20 transition-all duration-300 group"
      >
        <div className="flex items-start justify-between mb-3 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider"
                style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                Work
              </span>
            </div>
            <h3 className="font-display font-semibold text-white text-lg leading-tight">{exp.title}</h3>
            <p className="text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 font-mono">
          <span>{exp.duration}</span>
          {exp.location && <><span>·</span><span>{exp.location}</span></>}
        </div>

        <ul className="space-y-2 mb-4">
          {exp.description.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
              {d}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ background: `${exp.color}10`, color: `${exp.color}cc`, border: `1px solid ${exp.color}20` }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)`, boxShadow: `0 0 20px ${exp.color}40` }}
        >
          {exp.icon}
        </motion.div>
        {index < total - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-px mt-2 flex-1"
            style={{ background: `linear-gradient(${exp.color}50, transparent)`, minHeight: '60px' }}
          />
        )}
      </div>

      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  )
}

/* ─────────────────────────────────────────────────
   PAGE SECTION
───────────────────────────────────────────────── */
export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 orb opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3">// 03. experience</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Work Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed22, #06b6d422)' }}>
                <RiBriefcaseLine size={16} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-lg">Work Experience</h3>
                <p className="text-slate-500 text-xs font-mono">{workExperiences.length} positions</p>
              </div>
            </motion.div>

            <div className="relative">
              {workExperiences.map((exp, i) => (
                <TimelineItem key={i} exp={exp} index={i} total={workExperiences.length} />
              ))}
            </div>
          </div>

          {/* RIGHT — Certificates Slider (sticky on desktop) */}
          <div className="lg:sticky lg:top-24">
            <CertificatesSlider inView={inView} />
          </div>

        </div>
      </div>
    </section>
  )
}
