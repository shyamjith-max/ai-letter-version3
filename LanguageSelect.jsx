
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function LanguageSelect({ onSelect }) {
  const handleClick = (lang) => {
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.6 }, colors: ['#f7dc6f','#ffd700','#ffb3b3'] })
    setTimeout(() => onSelect(lang), 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center space-y-8 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300">
        WHAT LANGUAGE DO YOU PREFER?
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {[
          { id: 'MALAYALAM', label: 'MALAYALAM' },
          { id: 'ENGLISH', label: 'ENGLISH' },
          { id: 'HINDI', label: 'HINDI' }
        ].map((lang) => (
          <motion.button
            key={lang.id}
            whileHover={{ y: -6 }}
            className="px-6 py-3 rounded-xl border border-white/10 min-w-[160px] font-medium bg-gradient-to-br from-red-500 to-orange-600"
            onClick={() => handleClick(lang.id)}
          >
            {lang.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
