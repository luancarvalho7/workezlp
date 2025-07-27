import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Building } from 'lucide-react';

interface CompanyNameInputProps {
  onNext: (value: string) => void;
  onBack: () => void;
}

export default function CompanyNameInput({ onNext, onBack }: CompanyNameInputProps) {
  const [currentInput, setCurrentInput] = useState('');

  const handleNext = () => {
    if (currentInput) {
      onNext(currentInput);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Building className="h-16 w-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's your company name?</h2>
            <p className="text-gray-400 text-lg">Tell us about your business</p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Your company name"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-lg"
              autoFocus
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={onBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!currentInput}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}