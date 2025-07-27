import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onNext: () => void;
}

export default function LandingPage({ onNext }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient-x">
            Get Your Website Audit
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover hidden opportunities and boost your online performance with our comprehensive website analysis
          </p>
          
          <Button 
            onClick={onNext}
            size="xl"
            className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Start
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}