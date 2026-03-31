import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  RiSendPlaneLine, RiUser3Line, RiMailLine, RiMessage2Line,RiWhatsappLine
  , RiLinkedinBoxLine, RiCheckLine, RiInstagramLine
} from 'react-icons/ri'
import toast from 'react-hot-toast'

export const API_URL = "https://yash-paithane-portfolio.onrender.com/api/contact"


const socials = [
  { icon: <RiWhatsappLine size={20} />, href: 'https://wa.me/8482868156', label: 'WhatsApp' },
  { icon: <RiLinkedinBoxLine size={20} />, href: 'http://linkedin.com/in/yash-paithane-515261355', label: 'LinkedIn' },
  { icon: <RiInstagramLine size={20} />, href: 'https://www.instagram.com/yashpaithane07', label: 'Instagram' },
]

function FloatingInput({ id, label, icon, type = 'text', value, onChange, error, multiline, placeholder }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0

  const baseClass = `w-full bg-transparent text-white placeholder-transparent font-body text-sm outline-none resize-none transition-all duration-200 ${multiline ? 'h-32 pt-1' : ''}`
  const wrapClass = `relative flex items-${multiline ? 'start' : 'center'} gap-3 px-4 ${multiline ? 'py-4' : 'py-0 h-14'} rounded-xl border transition-all duration-300 ${
    error
      ? 'border-pink-500/50 bg-pink-500/5'
      : focused
      ? 'border-violet-500/50 bg-violet-500/5'
      : 'border-border bg-white/[0.02] hover:border-violet-500/20'
  }`

  return (
    <div className="relative">
      <div className={wrapClass}>
        <span className={`shrink-0 transition-colors duration-200 ${multiline ? 'mt-1' : ''} ${
          error ? 'text-pink-400' : focused || hasValue ? 'text-violet-400' : 'text-slate-600'
        }`}>
          {icon}
        </span>
        {multiline ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className={baseClass}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className={baseClass}
          />
        )}
        {/* Floating label */}
        <label
          htmlFor={id}
          className={`absolute left-10 pointer-events-none transition-all duration-200 font-body ${
            focused || hasValue
              ? `top-0 -translate-y-2.5 text-[11px] px-1 rounded ${error ? 'text-pink-400 bg-void' : 'text-violet-400 bg-void'}`
              : `text-sm text-slate-500 ${multiline ? 'top-4' : 'top-1/2 -translate-y-1/2'}`
          }`}
        >
          {label}
        </label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-pink-400 text-xs mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Name must be at least 2 characters'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        toast.success('Message sent! Ill get back to you soon 🚀')
        setTimeout(() => setSent(false), 5000)
      } else {
        toast.error(data.message || 'Something went wrong')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 orb opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute top-0 right-0 w-80 h-80 orb opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }} />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-pink-400 text-sm tracking-widest uppercase mb-3">// 04. contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-4" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
          <p className="text-slate-400 max-w-lg mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you.
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {[
              { label: 'Email', value: 'yashpaithane07@gmail.com', color: '#7c3aed' },
              { label: 'Location', value: 'Remote / Worldwide', color: '#06b6d4' },
              { label: 'Response time', value: 'Within 24 hours', color: '#a855f7' },
            ].map(({ label, value, color }) => (
              <div key={label} className="glass rounded-xl p-5 border border-border">
                <div className="text-xs font-mono mb-1" style={{ color }}>{label}</div>
                <div className="text-white font-medium">{value}</div>
              </div>
            ))}

            {/* Status */}
            <div className="glass rounded-xl p-5 border border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Open to work</span>
              </div>
              <p className="text-slate-400 text-xs mt-1.5">Available for full-time, contract & freelance roles</p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-slate-500 font-mono mb-3 uppercase tracking-widest">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-border hover:border-violet-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-8 border border-border relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, #7c3aed, transparent)' }} />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    >
                      <RiCheckLine size={28} />
                    </motion.div>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white mb-1">Send a message</h3>
                      <p className="text-slate-500 text-sm">I'll reply to your email directly.</p>
                    </div>

                    <FloatingInput
                      id="name"
                      label="Your Name"
                      placeholder="Your Name"
                      icon={<RiUser3Line size={18} />}
                      value={form.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                    />
                    <FloatingInput
                      id="email"
                      label="Email Address"
                      placeholder="Email Address"
                      type="email"
                      icon={<RiMailLine size={18} />}
                      value={form.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                    />
                    <FloatingInput
                      id="message"
                      label="Your Message"
                      placeholder="Your Message"
                      icon={<RiMessage2Line size={18} />}
                      value={form.message}
                      onChange={handleChange('message')}
                      error={errors.message}
                      multiline
                    />

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                      whileHover={!loading ? { scale: 1.01, boxShadow: '0 0 30px rgba(124,58,237,0.4)' } : {}}
                      whileTap={!loading ? { scale: 0.99 } : {}}
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <RiSendPlaneLine size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
