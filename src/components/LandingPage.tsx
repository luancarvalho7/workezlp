import React, { useState, useEffect } from 'react';
import { RainbowButton } from './ui/rainbow-button';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
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
              onClick={onStart}
              className="w-full h-12 text-base sm:text-lg font-semibold"
            >
              Start
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
}