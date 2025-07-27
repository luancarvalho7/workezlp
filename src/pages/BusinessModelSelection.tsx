import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Target } from 'lucide-react';

interface BusinessModelSelectionProps {
  onNext: (value: string) => void;
  onBack: () => void;
}

export default function BusinessModelSelection({ onNext, onBack }: BusinessModelSelectionProps) {
  const [selectedBusinessModel, setSelectedBusinessModel] = useState('');

  const handleNext = () => {
    if (selectedBusinessModel) {
      onNext(selectedBusinessModel);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Target className="h-16 w-16 mx-auto mb-6 text-indigo-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's your business model?</h2>
            <p className="text-gray-400 text-lg">How do you serve your customers?</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4">
              {['B2B', 'B2C', 'B2B2C', 'SaaS', 'E-commerce', 'Marketplace', 'Subscription', 'Other'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedBusinessModel(option)}
                  className={`w-full px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    selectedBusinessModel === option
                      ? 'bg-indigo-600 text-white border-2 border-indigo-500'
                      : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
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
                disabled={!selectedBusinessModel}
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 px-8"
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