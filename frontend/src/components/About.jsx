import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  RiReactjsLine, RiNodejsLine, RiCloudLine,
  RiJavascriptLine, RiGitBranchLine, RiJavaLine,RiAmazonLine
} from 'react-icons/ri'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiDocker,SiMysql,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiWordpress ,SiExpress, 
} from 'react-icons/si'

const skillCategories = [
  {
    label: 'Frontend',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.2)',
    skills: [
      { name: 'React.js', icon: <RiReactjsLine />, level: 92 },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
      { name: 'Wordpress', icon: < SiWordpress />, level: 80 },
    ]
  },
  {
    label: 'Backend',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
    skills: [
      { name: 'Node.js', icon: <RiNodejsLine />, level: 70 },
      { name: 'REST APIs', icon: <RiJavascriptLine />, level: 80 },
      { name: 'Express.js', icon: <SiExpress />, level: 82 },
      
    ]
  },
  {
  label: 'Programming Languages',
  color: '#22c55e',
  glow: 'rgba(34,197,94,0.2)',
  skills: [
    { name: 'Java', icon: <RiJavaLine />, level: 85 },
    { name: 'JavaScript', icon: <RiJavascriptLine />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
  ]
},
  {
    label: 'Database',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.2)',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
       { name: 'MySQL', icon: <SiMysql />, level: 88 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
   
    ]
  },
  {
    label: 'Cloud & DevOps',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.2)',
    skills: [
       { name: 'Amazon Web Services', icon: <RiAmazonLine />, level: 87 },
      { name: 'Docker', icon: <SiDocker />, level: 75 },
      { name: 'Git / GitHub', icon: <RiGitBranchLine />, level: 92 },
      { name: 'Vercel / Render', icon: <RiCloudLine />, level: 85 },
    ]
  },
]

function SkillBar({ name, icon, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <span style={{ color }}>{icon}</span>
          <span>{name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } }
  }
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 orb"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">// 01. about</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            {/* Avatar placeholder */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="relative mb-8 w-fit"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden glass border border-violet-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-7xl font-display font-bold gradient-text">Yp</span>
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 glass border border-emerald-500/30 rounded-xl px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-mono">Open to work</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="space-y-4 text-slate-400 leading-relaxed"
            >
              <p>
            Hey! I'm <span className="text-white font-medium">Yash Paithane</span>, a dedicated Full Stack
           Developer focused on building modern, scalable web applications. I specialize in creating
          clean, responsive user interfaces and robust backend systems using real-world technologies.
            </p>

            <p>
           I have built <span className="text-white font-medium">production-level projects</span> like Tripverse
           and AI-powered platforms, working with React, Node.js, and PostgreSQL. My approach is centered
                around writing clean code, solving real problems, and delivering practical solutions through hands-on development.
            </p>

            <p>
            Along with development, I have gained practical exposure through internships and continuous
              learning. I am actively improving my problem-solving skills and preparing to build
            high-performance systems that scale in real-world environments.
            </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-3 mt-8"
            >
              {[
                { label: 'Location', value: '🌏 Remote / Global' },
                { label: 'Experience', value: 'Hands-on experience building real-world projects' },
                { label: 'Education', value: 'B.Tech (CSE)' },
                { label: 'Focus', value: 'Full Stack Dev' },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-xl p-3 border border-border">
                  <div className="text-xs text-slate-500 mb-1">{label}</div>
                  <div className="text-sm text-slate-200 font-medium">{value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                variants={fadeUp(0.1 + ci * 0.1)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="glass rounded-2xl p-6 border border-border hover:border-violet-500/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <h3 className="font-display font-semibold text-white">{cat.label}</h3>
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} delay={ci * 4 + si} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
