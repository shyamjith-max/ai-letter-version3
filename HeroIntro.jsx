
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import confetti from 'canvas-confetti'

export default function HeroIntro({ onSelect }) {
  const [loaded, setLoaded] = useState(false)

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 1 },
    created: () => setLoaded(true),
  })

  useEffect(() => {
    // small entrance confetti
    confetti({ particleCount: 20, spread: 50, origin: { y: 0.2 }, colors: ['#ffd700','#fff6b8','#ff6b6b'] })
  }, [])

  return (
    <div className="flex flex-col items-center text-center space-y-10 px-4">
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg"
      >
        HELLO SWITEE, WHAT’S THE SPECIAL DAY?
      </motion.h1>

      <div ref={sliderRef} className="keen-slider w-80 md:w-[520px] h-56">
        {["BIRTHDAY", "LOVE", "MARRIAGE"].map((option, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-[420px] h-48 rounded-3xl shadow-2xl p-6 flex flex-col justify-between cursor-pointer"
              onClick={() => {
                confetti({ particleCount: 40, spread: 70, origin: { y: 0.3 }, colors: ['#ffd700','#fff6b8','#ff9f1c'] });
                setTimeout(() => onSelect(option), 220);
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.95), rgba(255,107,107,0.95))',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'white'
              }}
            >
              <div>
                <div className="text-2xl md:text-4xl font-bold">{option}</div>
                <div className="mt-2 text-sm opacity-90">Slide / Tap to choose</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-white/10 rounded-full">→</div>
                <div className="text-xs opacity-80">Luxurious • Animated • 3D-feel</div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
