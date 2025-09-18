
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import confetti from 'canvas-confetti'

export default function HeroIntro({ onSelect }) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 1 },
  })

  useEffect(() => {
    // entrance push effect simulation
    confetti({ particleCount: 24, spread: 50, origin: { y: 0.2 }, colors: ['#ffd700','#fff6b8','#ff6b6b'] })
  }, [])

  const cards = [
    { key: 'BIRTHDAY', sub: 'Celebrate the day', from: '#FFD166', to: '#F94144' },
    { key: 'LOVE', sub: 'Say it from the heart', from: '#FFAFCC', to: '#9B5DE5' },
    { key: 'MARRIAGE', sub: 'A lifetime note', from: '#FFDE7D', to: '#6A0572' }
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <motion.h1 initial={{ y: -120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          HELLO SWITEE — WHAT'S THE SPECIAL DAY?
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-sm md:text-lg opacity-90">
          Slide to choose — Birthday / Love / Marriage
        </motion.p>

        <div ref={sliderRef} className="keen-slider mt-8">
          {cards.map((c) => (
            <div key={c.key} className="keen-slider__slide flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { confetti({ particleCount: 50, spread: 80, origin: { y: 0.3 }, colors: ['#ffd700','#fff6b8','#ff9f1c'] }); setTimeout(() => onSelect(c.key), 220); }}
                className="w-11/12 md:w-2/3 rounded-3xl p-8 shadow-2xl text-left"
                style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, color: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-2xl md:text-4xl font-bold">{c.key}</div>
                <div className="mt-2 opacity-90">{c.sub}</div>
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
