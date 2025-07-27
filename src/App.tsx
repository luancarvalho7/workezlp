import { RainbowButton } from "./components/ui/rainbow-button"
import { useEffect, useState } from "react"

function LandingPage({ onContinue, onNoWebsite }: { onContinue: () => void, onNoWebsite: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>

          <path
            d="M0 300 Q300 250 600 300 T1200 300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0 500 Q300 450 600 500 T1200 500"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-500"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="space-y-4">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight text-white max-w-[1000px] mx-auto px-4">
                  The 5 Minute{" "}{" "}
                  <span className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-cormorant italic scale-[1.3] inline-block mx-8">
                    AI Growth
                  </span>{" "}{" "}
                  Audit
                  <br />
                  <span className="scale-[0.83] inline-block">That See What Works, What Fails</span>
                  <br />
                  <span className="scale-[0.83] inline-block">What to Do Next</span>
                </h1>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`mt-12 sm:mt-16 max-w-sm sm:max-w-md mx-auto px-4 transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <p className="block text-white/80 text-base sm:text-lg font-light mb-6 text-center">
                  Let's get started with your audit
                </p>
                <div className="space-y-4">
                  <RainbowButton 
                    onClick={onContinue}
                    className="w-full h-12 text-base sm:text-lg font-semibold"
                  >
                    I Have A Website
                  </RainbowButton>
                  
                  <button
                    onClick={onNoWebsite}
                    className="w-full text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors duration-300 text-sm sm:text-base py-2"
                  >
                    I DON'T HAVE A WEBSITE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function WebsiteUrlPage({ onBack, onContinue }: { onBack: () => void, onContinue: (url: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [companyUrl, setCompanyUrl] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (companyUrl.trim()) {
      onContinue(companyUrl)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background (same as landing page) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q300 250 600 300 T1200 300" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M0 500 Q300 450 600 500 T1200 500" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" className="animate-pulse delay-500" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-4 sm:left-6">
          <button
            onClick={onBack}
            className="text-white hover:text-purple-300 transition-all duration-300 px-4 py-2"
          >
            ← Back
          </button>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
          <div className="max-w-md mx-auto w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
                What's your website URL?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                Enter your company website so we can analyze it
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="url"
                  placeholder="https://your-website.com"
                  value={companyUrl}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                  required
                />
                
                <RainbowButton 
                  type="submit"
                  className="w-full h-12 text-base sm:text-lg font-semibold"
                >
                  Continue
                </RainbowButton>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NamePage({ onBack, onContinue }: { onBack: () => void, onContinue: (name: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onContinue(name)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background (same as other pages) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q300 250 600 300 T1200 300" stroke="url(#lineGradient3)" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M0 500 Q300 450 600 500 T1200 500" stroke="url(#lineGradient3)" strokeWidth="1" fill="none" className="animate-pulse delay-500" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-4 sm:left-6">
          <button
            onClick={onBack}
            className="text-white hover:text-purple-300 transition-all duration-300 px-4 py-2"
          >
            ← Back
          </button>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
          <div className="max-w-md mx-auto w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
                What's your name?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                We'll personalize your audit results
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                  required
                />
                
                <RainbowButton 
                  type="submit"
                  className="w-full h-12 text-base sm:text-lg font-semibold"
                >
                  Continue
                </RainbowButton>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function EmailPage({ onBack, onContinue }: { onBack: () => void, onContinue: (email: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      onContinue(email)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background (same as other pages) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q300 250 600 300 T1200 300" stroke="url(#lineGradient4)" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M0 500 Q300 450 600 500 T1200 500" stroke="url(#lineGradient4)" strokeWidth="1" fill="none" className="animate-pulse delay-500" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-4 sm:left-6">
          <button
            onClick={onBack}
            className="text-white hover:text-purple-300 transition-all duration-300 px-4 py-2"
          >
            ← Back
          </button>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
          <div className="max-w-md mx-auto w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
                What's your email address?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                We'll send your personalized audit results here
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                  required
                />
                
                <RainbowButton 
                  type="submit"
                  className="w-full h-12 text-base sm:text-lg font-semibold"
                >
                  Start My Audit
                </RainbowButton>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'url' | 'name' | 'email'>('landing')
  const [formData, setFormData] = useState({
    hasWebsite: true,
    companyUrl: '',
    name: '',
    email: ''
  })

  const handleLandingContinue = () => {
    setFormData(prev => ({ ...prev, hasWebsite: true }))
    setCurrentPage('url')
  }

  const handleNoWebsite = () => {
    setFormData(prev => ({ ...prev, hasWebsite: false, companyUrl: '' }))
    setCurrentPage('name')
  }

  const handleUrlContinue = (url: string) => {
    setFormData(prev => ({ ...prev, companyUrl: url }))
    setCurrentPage('name')
  }

  const handleNameContinue = (name: string) => {
    setFormData(prev => ({ ...prev, name }))
    setCurrentPage('email')
  }

  const handleEmailContinue = (email: string) => {
    setFormData(prev => ({ ...prev, email }))
    console.log('Final form data:', { ...formData, email })
    // Here you would typically submit the form or proceed to the next step
  }

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage 
          onContinue={handleLandingContinue}
          onNoWebsite={handleNoWebsite}
        />
      )}
      {currentPage === 'url' && (
        <WebsiteUrlPage 
          onBack={() => setCurrentPage('landing')}
          onContinue={handleUrlContinue}
        />
      )}
      {currentPage === 'name' && (
        <NamePage 
          onBack={() => setCurrentPage(formData.hasWebsite ? 'url' : 'landing')}
          onContinue={handleNameContinue}
        />
      )}
      {currentPage === 'email' && (
        <EmailPage 
          onBack={() => setCurrentPage('name')}
          onContinue={handleEmailContinue}
        />
      )}
    </>
  )
}