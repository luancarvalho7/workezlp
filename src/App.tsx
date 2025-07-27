import { RainbowButton } from "./components/ui/rainbow-button"
import { useEffect, useState } from "react"
import { LandingPage } from './components/LandingPage';

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
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
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
  const [currentPage, setCurrentPage] = useState<'landing' | 'url' | 'name' | 'email' | 'companyName' | 'revenue' | 'employees' | 'location' | 'industry' | 'businessModel' | 'situation' | 'channels' | 'competitors'>('landing')
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
    // Here you would typically submit the form or proceed to the audit results
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {currentPage === 'landing' && (
        <LandingPage onStart={() => setCurrentPage('website')} />
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
    </div>
  )
}