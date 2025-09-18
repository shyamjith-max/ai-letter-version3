
import { useState } from 'react'
import HeroIntro from '@/components/HeroIntro'
import LanguageSelect from '@/components/LanguageSelect'
import ActorSelect from '@/components/ActorSelect'

export default function Home() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState(null)
  const [language, setLanguage] = useState(null)
  const [actor, setActor] = useState(null)

  return (
    <div className="min-h-screen">
      <header className="py-6 px-4">
        <div className="max-w-6xl mx-auto text-white flex items-center justify-between">
          <div className="text-xl font-bold">AI Letter Generator</div>
          <div className="text-sm opacity-90">Make it personal • Luxurious UI</div>
        </div>
      </header>

      <main className="flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          {step === 1 && (
            <HeroIntro onSelect={(cat) => { setCategory(cat); setStep(2); }} />
          )}
          {step === 2 && (
            <LanguageSelect onSelect={(lang) => { setLanguage(lang); setStep(3); }} />
          )}
          {step === 3 && (
            <div>
              <ActorSelect language={language} />
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => alert('Actor selection clickable behavior to be wired in next step.')}
                  className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold"
                >
                  Next (preview)
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-white">Next: video generation (coming soon)</div>
          )}
        </div>
      </main>

      <footer className="py-6 text-center text-white/60 text-sm">
        Tip: replace public portraits in /public to use real images (mind rights).
      </footer>
    </div>
  )
}
