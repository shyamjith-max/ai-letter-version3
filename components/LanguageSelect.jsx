
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function LanguageSelect({ onSelect }) {
  const langs = ['MALAYALAM','ENGLISH','HINDI']

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">WHAT LANGUAGE YOU PREFER?</h3>
          <p className="text-sm opacity-90 mb-6">Pick one — voices & expressions will match this.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {langs.map((L) => (
              <motion.button key={L} whileHover={{ y: -6 }} className="px-6 py-3 rounded-xl border border-white/20 min-w-[160px] font-medium bg-gradient-to-br from-red-500 to-orange-600" onClick={() => { confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 }, colors: ['#f8c471','#f7dc6f','#f9e79f'] }); setTimeout(() => onSelect(L), 300); }}>{L}</motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
