import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri'
import AiResumeImg from '../assets/ai-resume.png'
import AiResearchImg from '../assets/research.png'
import InstituteImg from '../assets/institute.png'
import JobTrackerImg from '../assets/job-tracker.png'
import WhisperImg from '../assets/whisper.png'


const projects = [
  {
    title: 'AI Resume Architect',
    description: 'Built an AI-powered resume builder with authentication, OTP verification, and ATS analysis, enabling users to create and preview resumes using 4 customizable templates with real-time editing.Integrated Gemini AI API to automatically analyse resumes and generate ATS scores and improvement suggestions, helping users optimize resumes for better job screening results.Developed a secure backend using Node.js, Express, and MongoDB with JWT authentication, supporting AI analysis, resume management, and file uploads up to 50MB.',
    image: AiResumeImg,
    gradient: 'from-violet-600/20 to-cyan-600/20',
    accent: '#7c3aed',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'Express.js', ],
    live: 'https://ai-powered-resume-builder-hazel.vercel.app',
    github: 'https://github.com/yash2174/AI-Powered-Resume-Builder.git',
  },
  {
    title: 'Institute Management System',
    description: 'Built a role-based platform to automate institute operations such as courses, enrolments, exams, and results, reducing manual work by 70%.Developed 15+ REST APIs with JWT authentication and email OTP verification, supporting 100+ concurrent users.Implemented real-time dashboards, leaderboard, and full CRUD workflows, and deployed the system on Render with production-ready configuration (99% uptime).',
    image: InstituteImg,
    gradient: 'from-pink-600/20 to-violet-600/20',
    accent: '#ec4899',
    tech: ['React.js', 'JavaScript', 'PostgreSQL', 'AWS S3', 'Brevo API','Express.js'],
    live: 'https://institute-management-system-1.onrender.com',
    github: 'https://github.com/yash2174/Institute-Management-System.git',
  },
  {
    title: 'Personal AI Research Assistant',
    description: 'Created an AI-driven platform to summarize, analyze, and visualize research papers via interactive mind mapping. Delivered a PostgreSQL-based scalable backend and clean UI using React.js and Tailwind CSS.',
    image: AiResearchImg,
    gradient: 'from-cyan-600/20 to-emerald-600/20',
    accent: '#06b6d4',
    tech: ['React.js', 'TypeScript', 'D3.js', 'PostgreSQL', 'OpenAI API'],
    live: 'https://ai-reasearch.vercel.app/',
    github: 'https://github.com/yash2174/pdf-insight-mapper.git',
  },
  {
    title: 'AI-Powered Job Tracker',
    description: 'AI-powered job platform featuring smart filtering, resume-based job matching, and real-time application tracking. Built with LangChain and LangGraph to deliver intelligent match scoring, natural language filtering, and personalized job recommendations. Includes resume analysis, Kanban-style tracking, and an interactive AI assistant for seamless job search experience.',
    image: JobTrackerImg,
    gradient: 'from-amber-600/20 to-orange-600/20',
    accent: '#f59e0b',
    tech: ['React', 'Node.js', 'Fastify', 'LangChain','LangGraph', 'Adzuana API'],
    live: 'https://ai-powered-job-tracker-with-smart-qceg.onrender.com',
    github: 'https://github.com/yash2174/AI-Powered-Job-Tracker-with-Smart-Matching.git',
  },
  {
    title: 'Text-TO-Speech: A Chrome Extension',
    description: ' Built a Chrome extension converting webpage text to speech for enhanced accessibility.Enabled hover-to-play functionality with customizable pitch, speed, and voice options.Targeted support for users with visual impairments; tested on multiple browser versions.',
    image: null,
    gradient: 'from-green-600/20 to-teal-600/20',
    accent: '#10b981',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Speech API', ],
    
  },
  {
    title: 'Whisper: Language Learning Chat Application',
    description: 'Built a real-time chat and video app enabling interactive multilingual learningg, Integrated 32 UI themes with secure authentication and responsive frontend.',
    image: WhisperImg,
    gradient: 'from-rose-600/20 to-pink-600/20',
    accent: '#f43f5e',
    tech: ['React.js', 'JavaScript', 'MongoDB', 'Stream API', ],
    live: 'https://whispr-ysdh.onrender.com/',
    github: 'https://github.com/yash2174/Whispr.git',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className="group relative glass rounded-2xl overflow-hidden border border-border cursor-pointer"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 60px ${project.accent}15, 0 0 40px ${project.accent}10` }}
      />

      {/* Image / Preview area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="absolute inset-0 w-full h-full object-cover"
  />
)}
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.accent}30 1px, transparent 1px), linear-gradient(90deg, ${project.accent}30 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Floating decorative shapes */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 rounded-xl border opacity-30"
          style={{ borderColor: project.accent }}
          animate={hovered ? { rotate: 45, scale: 1.2 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-8 h-8 rounded-full border opacity-20"
          style={{ borderColor: project.accent }}
          animate={hovered ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-5xl font-display font-bold"
            style={{ color: project.accent, opacity: 0.4 }}
            animate={hovered ? { scale: 1.2, opacity: 0.7 } : { scale: 1, opacity: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            {project.title.charAt(0)}
          </motion.div>
        </div>

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: `linear-gradient(135deg, ${project.accent}30, rgba(0,0,0,0.6))` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
            style={{ background: project.accent }}
          >
            <RiExternalLinkLine size={15} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white glass border border-white/20 transition-all duration-200 hover:scale-105"
          >
            <RiGithubLine size={15} /> GitHub
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-semibold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{ backgroundImage: `linear-gradient(135deg, ${project.accent}, #06b6d4)` }}>
            {project.title}
          </h3>
          <div className="flex gap-2 ml-2 shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors">
              <RiGithubLine size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors">
              <RiExternalLinkLine size={18} />
            </a>
          </div>
        </div>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-5 line-clamp-3 line-clamp-5 md:line-clamp-3 md:group-hover:line-clamp-none transition-all duration-300">
  {project.description}
</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-200"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 orb opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">// 02. projects</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
          <p className="mt-4 text-slate-400 max-w-xl">
            A curated selection of projects that showcase my range — from SaaS platforms to open-source tools.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/yash2174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-violet-500/20 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all duration-300 text-sm font-medium group"
          >
            <RiGithubLine size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
