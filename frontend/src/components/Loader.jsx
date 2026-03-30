import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-void flex flex-col items-center justify-center z-50"
    >
      {/* Animated logo ring */}
      <div className="relative mb-8">
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            background: 'linear-gradient(#050508, #050508) padding-box, linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899) border-box'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-3xl font-display font-bold gradient-text">YP</span>
        </motion.div>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        className="mt-4 text-slate-500 text-sm font-mono tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}
