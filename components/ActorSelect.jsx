
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ACTORS = {
  MALAYALAM: [
    { key: 'dulquer', name: 'Dulquer Salmaan', img: '/actors/dulquer.jpg' },
    { key: 'mohanlal', name: 'Mohanlal', img: '/actors/mohanlal.jpg' },
    { key: 'mammootty', name: 'Mammootty', img: '/actors/mammootty.jpg' },
  ],
  ENGLISH: [
    { key: 'scarlett', name: 'Scarlett Johansson', img: '/actors/scarlett.jpg' },
    { key: 'leo', name: 'Leonardo DiCaprio', img: '/actors/leo.jpg' },
    { key: 'tom', name: 'Tom Cruise', img: '/actors/tom.jpg' },
  ],
  HINDI: [
    { key: 'amitabh', name: 'Amitabh Bachchan', img: '/actors/amitabh.jpg' },
    { key: 'salman', name: 'Salman Khan', img: '/actors/salman.jpg' },
    { key: 'alia', name: 'Alia Bhatt', img: '/actors/alia.jpg' },
  ],
}

export default function ActorSelect({ language, onChoose }) {
  const list = ACTORS[language] || []

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <AnimatePresence>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4">WHICH ACTOR YOU PREFER?</h3>
            <p className="text-sm opacity-90 mb-6">Tap an actor to prepare the 10s wish in their style.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {list.map((a) => (
                <motion.button key={a.key} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onChoose(a)} className="bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md relative">
                    <Image src={a.img} alt={a.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-yellow-200">{a.name}</div>
                    <div className="text-xs opacity-80">Tap to select</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
