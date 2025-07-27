import { RainbowButton } from "./components/ui/rainbow-button"
import { useEffect, useState } from "react"
import { cn } from './lib/utils';

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
              <RainbowButton 
                onClick={onContinue}
                className="w-full h-12 text-base sm:text-lg font-semibold"
              >
                Start
              </RainbowButton>
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

function CompanyDetailsPage({ onBack, onContinue }: { onBack: () => void, onContinue: (data: any) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (companyName.trim()) {
      onContinue(companyName)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12">
          <div className="max-w-2xl mx-auto w-full">
            <div
              className={`text-center mb-8 transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
                What's your company name?
              </h1>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 delay-500",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function MonthlyRevenuePage({ onBack, onContinue }: { onBack: () => void, onContinue: (revenue: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [monthlyRevenue, setMonthlyRevenue] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (monthlyRevenue.trim()) {
      onContinue(monthlyRevenue)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                What's your monthly revenue?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                Enter your approximate monthly revenue in USD
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="number"
                  placeholder="150000000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function EmployeeCountPage({ onBack, onContinue }: { onBack: () => void, onContinue: (count: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [employeeCount, setEmployeeCount] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (employeeCount.trim()) {
      onContinue(employeeCount)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                How many employees do you have?
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="number"
                  placeholder="1957"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function LocationPage({ onBack, onContinue }: { onBack: () => void, onContinue: (location: { country: string, state: string, city: string }) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (country.trim() && state.trim() && city.trim()) {
      onContinue({ country, state, city })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                Where is your company located?
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Country (e.g., United States)"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  required
                />
                
                <input
                  type="text"
                  placeholder="State/Province (e.g., MA)"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  required
                />
                
                <input
                  type="text"
                  placeholder="City (e.g., Quincy)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function IndustryPage({ onBack, onContinue }: { onBack: () => void, onContinue: (industry: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [industry, setIndustry] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (industry.trim()) {
      onContinue(industry)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                What industry are you in?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                Separate multiple industries with commas
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
                  placeholder="Telecommunications"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function BusinessModelPage({ onBack, onContinue }: { onBack: () => void, onContinue: (model: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [businessModel, setBusinessModel] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (businessModel.trim()) {
      onContinue(businessModel)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                What's your business model?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                e.g., B2B, B2C, B2B2C (separate multiple with commas)
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
                  placeholder="B2B"
                  value={businessModel}
                  onChange={(e) => setBusinessModel(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function CurrentSituationPage({ onBack, onContinue }: { onBack: () => void, onContinue: (situation: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSituation, setCurrentSituation] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentSituation.trim()) {
      onContinue(currentSituation)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                Describe your current situation
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                Brief description of your company and what you do
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <textarea
                  placeholder="We are a leading provider of advanced communications and technology solutions..."
                  value={currentSituation}
                  onChange={(e) => setCurrentSituation(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
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

function AcquisitionChannelsPage({ onBack, onContinue }: { onBack: () => void, onContinue: (channels: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [acquisitionChannels, setAcquisitionChannels] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (acquisitionChannels.trim()) {
      onContinue(acquisitionChannels)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                What are your acquisition channels?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                How do you currently acquire customers? (separate with commas)
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
                  placeholder="Direct Sales, Channel Partners, Online Marketing"
                  value={acquisitionChannels}
                  onChange={(e) => setAcquisitionChannels(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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

function CompetitorsPage({ onBack, onContinue }: { onBack: () => void, onContinue: (competitors: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [competitors, setCompetitors] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (competitors.trim()) {
      onContinue(competitors)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black to-black/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
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
                Who are your main competitors?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                List your top competitors (separate with commas)
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
                  placeholder="BullsEye Telecom, EarthLink, Consolidated Communications"
                  value={competitors}
                  onChange={(e) => setCompetitors(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
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
  const [currentPage, setCurrentPage] = useState<'landing' | 'url' | 'name' | 'email' | 'companyName' | 'revenue' | 'employees' | 'location' | 'industry' | 'businessModel' | 'situation' | 'channels' | 'competitors' | 'loading'>('landing')
  const [formData, setFormData] = useState({
    hasWebsite: true,
    companyUrl: '',
    name: '',
    email: '',
    companyName: '',
    monthlyRevenue: '',
    employeeCount: '',
    country: '',
    state: '',
    city: '',
    industry: '',
    businessModel: '',
    currentSituation: '',
    acquisitionChannels: '',
    competitors: ''
  })
  
  // API integration states
  const [apiData, setApiData] = useState(null)
  const [isLoadingApiData, setIsLoadingApiData] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [websiteUrl, setWebsiteUrl] = useState('')
  
  // Fetch enterprise info from API
  const fetchEnterpriseInfo = async (website: string) => {
    setIsLoadingApiData(true)
    setApiError(null)
    
    try {
      const response = await fetch('https://apivftomc-n8n-test-videos.aacepg.easypanel.host/webhook/getEnterpriseInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ website }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('API Response:', data)
      
      if (data && data.length > 0) {
        setApiData(data[0]) // Take the first item from the array
      } else {
        throw new Error('No data received from API')
      }
    } catch (error: any) {
      console.error('Error fetching enterprise info:', error)
      setApiError(error.message)
    } finally {
      setIsLoadingApiData(false)
    }
  }

  // Auto-advance after API call completes
  useEffect(() => {
    if (!isLoadingApiData && currentPage === 'loading' && (apiData || apiError)) {
      // Wait a moment then advance to next page
      setTimeout(() => {
        setCurrentPage('companyName')
      }, 1000)
    }
  }, [isLoadingApiData, apiData, apiError, currentPage])

  // Helper functions to get initial values from API data
  const getInitialCompanyName = () => apiData?.name || ''
  const getInitialRevenue = () => apiData?.month_revenue || ''
  const getInitialDescription = () => apiData?.current_situation || ''
  const getInitialEmployeeCount = () => {
    if (!apiData?.employee_count) return ''
    const count = apiData.employee_count
    if (count === 1) return 'Just Me'
    if (count <= 10) return '1-10'
    if (count <= 60) return '10-60'
    if (count <= 200) return '60-200'
    return '200+'
  }
  const getInitialLocation = () => ({
    city: apiData?.city || '',
    state: apiData?.state_ac || '',
    country: apiData?.country || ''
  })
  const getInitialIndustry = () => apiData?.industry ? apiData.industry.join(', ') : ''
  const getInitialBusinessModel = () => apiData?.business_model?.[0] || ''
  const getInitialChannels = () => apiData?.['Acquisition Channels'] || []
  const getInitialCompetitors = () => apiData?.Competitors ? 
    apiData.Competitors.map((comp: any) => comp.name).join(', ') : ''

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
    setWebsiteUrl(url)
    fetchEnterpriseInfo(url)
    setCurrentPage('loading')
  }

  const handleNameContinue = (name: string) => {
    setFormData(prev => ({ ...prev, name }))
    setCurrentPage('email')
  }

  const handleEmailContinue = (email: string) => {
    setFormData(prev => ({ ...prev, email }))
    setCurrentPage('companyName')
  }

  const handleCompanyNameContinue = (companyName: string) => {
    setFormData(prev => ({ ...prev, companyName }))
    setCurrentPage('revenue')
  }

  const handleRevenueContinue = (revenue: string) => {
    setFormData(prev => ({ ...prev, monthlyRevenue: revenue }))
    setCurrentPage('employees')
  }

  const handleEmployeesContinue = (count: string) => {
    setFormData(prev => ({ ...prev, employeeCount: count }))
    setCurrentPage('location')
  }

  const handleLocationContinue = (location: { country: string, state: string, city: string }) => {
    setFormData(prev => ({ ...prev, country: location.country, state: location.state, city: location.city }))
    setCurrentPage('industry')
  }

  const handleIndustryContinue = (industry: string) => {
    setFormData(prev => ({ ...prev, industry }))
    setCurrentPage('businessModel')
  }

  const handleBusinessModelContinue = (model: string) => {
    setFormData(prev => ({ ...prev, businessModel: model }))
    setCurrentPage('situation')
  }

  const handleSituationContinue = (situation: string) => {
    setFormData(prev => ({ ...prev, currentSituation: situation }))
    setCurrentPage('channels')
  }

  const handleChannelsContinue = (channels: string) => {
    setFormData(prev => ({ ...prev, acquisitionChannels: channels }))
    setCurrentPage('competitors')
  }

  const handleCompetitorsContinue = (competitors: string) => {
    const finalData = {
      ...formData,
      competitors
    }
    
    // Process the form data to match the required format
    const processedData = {
      name: finalData.companyName,
      month_revenue: parseInt(finalData.monthlyRevenue) || 0,
      employee_count: parseInt(finalData.employeeCount) || 0,
      country: finalData.country,
      state_ac: finalData.state,
      city: finalData.city,
      industry: finalData.industry.split(',').map(i => i.trim()).filter(i => i),
      business_model: finalData.businessModel.split(',').map(b => b.trim()).filter(b => b),
      current_situation: finalData.currentSituation,
      "Social Media": {
        "Twitter": `https://twitter.com/${finalData.companyName.replace(/\s+/g, '')}`,
        "Facebook": `https://www.facebook.com/${finalData.companyName.replace(/\s+/g, '')}`,
        "LinkedIn": `https://www.linkedin.com/company/${finalData.companyName.toLowerCase().replace(/\s+/g, '-')}`
      },
      "Acquisition Channels": finalData.acquisitionChannels.split(',').map(a => a.trim()).filter(a => a),
      "Competitors": competitors.split(',').map(c => c.trim()).filter(c => c).map(comp => ({
        name: comp,
        website: `https://www.${comp.toLowerCase().replace(/\s+/g, '')}.com`
      }))
    }
    
    console.log('Final processed data:', processedData)
    console.log('API Data:', apiData)
    // Here you would typically submit the form or proceed to the audit results
  }

  // Loading page while waiting for API response
  if (currentPage === 'loading') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="h-16 w-16 mx-auto mb-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Analyzing your website...</h2>
              <p className="text-gray-400 text-lg">
                {isLoadingApiData ? 'We\'re gathering information about your company' : 
                 apiError ? 'Something went wrong, but you can continue manually' :
                 'Analysis complete! Preparing your personalized form...'}
              </p>
            </div>
            
            {apiError && (
              <div className="space-y-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <p className="text-red-400 text-sm">Error: {apiError}</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => fetchEnterpriseInfo(websiteUrl)}
                    className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 rounded"
                  >
                    Retry
                  </button>
                  <button 
                    onClick={() => setCurrentPage('companyName')}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded"
                  >
                    Continue Manually
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
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
      {currentPage === 'companyName' && (
        <CompanyDetailsPage 
          onBack={() => setCurrentPage('email')}
          onContinue={handleCompanyNameContinue}
        />
      )}
      {currentPage === 'revenue' && (
        <MonthlyRevenuePage 
          onBack={() => setCurrentPage('companyName')}
          onContinue={handleRevenueContinue}
        />
      )}
      {currentPage === 'employees' && (
        <EmployeeCountPage 
          onBack={() => setCurrentPage('revenue')}
          onContinue={handleEmployeesContinue}
        />
      )}
      {currentPage === 'location' && (
        <LocationPage 
          onBack={() => setCurrentPage('employees')}
          onContinue={handleLocationContinue}
        />
      )}
      {currentPage === 'industry' && (
        <IndustryPage 
          onBack={() => setCurrentPage('location')}
          onContinue={handleIndustryContinue}
        />
      )}
      {currentPage === 'businessModel' && (
        <BusinessModelPage 
          onBack={() => setCurrentPage('industry')}
          onContinue={handleBusinessModelContinue}
        />
      )}
      {currentPage === 'situation' && (
        <CurrentSituationPage 
          onBack={() => setCurrentPage('businessModel')}
          onContinue={handleSituationContinue}
        />
      )}
      {currentPage === 'channels' && (
        <AcquisitionChannelsPage 
          onBack={() => setCurrentPage('situation')}
          onContinue={handleChannelsContinue}
        />
      )}
      {currentPage === 'competitors' && (
        <CompetitorsPage 
          onBack={() => setCurrentPage('channels')}
          onContinue={handleCompetitorsContinue}
        />
      )}
    </>
  )
}