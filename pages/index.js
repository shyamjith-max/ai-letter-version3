
import { useState } from 'react'
import HeroIntro from '@/components/HeroIntro'
import LanguageSelect from '@/components/LanguageSelect'
import ActorSelect from '@/components/ActorSelect'

export default function Home() {
  const [stage, setStage] = useState('intro') // intro -> language -> actors -> done
  const [category, setCategory] = useState(null)
  const [language, setLanguage] = useState(null)
  const [actor, setActor] = useState(null)

  const handleChooseCategory = (c) => {
    setCategory(c)
    setStage('language')
  }

  const handleChooseLang = (l) => {
    setLanguage(l)
    setStage('actors')
  }

  const handleChooseActor = (a) => {
    setActor(a)
    setStage('done')
  }

  return (
    <div className="min-h-screen">
      <header className="py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">AI Letter Generator</div>
          <div className="text-sm opacity-90">Luxurious UI</div>
        </div>
      </header>

      <main>
        {stage === 'intro' && <HeroIntro onSelect={handleChooseCategory} />}
        {stage === 'language' && <LanguageSelect onSelect={handleChooseLang} />}
        {stage === 'actors' && <ActorSelect language={language} onChoose={handleChooseActor} />}

        {stage === 'done' && (
          <section className="py-12">
            <div className="container mx-auto text-center bg-white/5 backdrop-blur-md p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-3">All set 🎉</h2>
              <p className="mb-4">You chose: <strong>{category}</strong> • <strong>{language}</strong> • <strong>{actor?.name}</strong></p>
              <p className="text-sm opacity-80">Next step: generate 10s video in the selected actor's style (integration coming next).</p>
            </div>
          </section>
        )}
      </main>

      <footer className="py-6 text-center text-white/60 text-sm">
        Tip: replace images in /public/actors with real headshots if you have permission.
      </footer>
    </div>
  )
}
