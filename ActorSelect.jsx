
import { motion } from 'framer-motion'
import Image from 'next/image'

const actors = {
  MALAYALAM: [
    { name: "Dulquer Salmaan", img: "/malayalam/dulquer.jpg" },
    { name: "Mohanlal", img: "/malayalam/mohanlal.jpg" },
    { name: "Mammootty", img: "/malayalam/mammootty.jpg" },
  ],
  ENGLISH: [
    { name: "Scarlett Johansson", img: "/english/scarlett.jpg" },
    { name: "Leonardo DiCaprio", img: "/english/leonardo.jpg" },
    { name: "Tom Cruise", img: "/english/tom.jpg" },
  ],
  HINDI: [
    { name: "Amitabh Bachchan", img: "/hindi/amitabh.jpg" },
    { name: "Salman Khan", img: "/hindi/salman.jpg" },
    { name: "Alia Bhatt", img: "/hindi/alia.jpg" },
  ],
}

export default function ActorSelect({ language }) {
  const list = actors[language] || []
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center space-y-6 px-4">
      <h2 className="text-3xl font-bold text-red-500 animate-pulse">WHICH ACTOR DO YOU PREFER?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {list.map((actor, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center"
          >
            <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
              <Image src={actor.img} alt={actor.name} layout="fill" objectFit="cover" />
            </div>
            <p className="mt-3 text-lg font-semibold text-yellow-200">{actor.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
