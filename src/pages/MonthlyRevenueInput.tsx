import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, DollarSign, ChevronDown } from 'lucide-react';

interface MonthlyRevenueInputProps {
  onNext: (value: string) => void;
  onBack: () => void;
}

export default function MonthlyRevenueInput({ onNext, onBack }: MonthlyRevenueInputProps) {
  const [currentInput, setCurrentInput] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleNext = () => {
    if (currentInput) {
      onNext(`${currency} ${currentInput}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <DollarSign className="h-16 w-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's your monthly revenue?</h2>
            <p className="text-gray-400 text-lg">This helps us understand your business scale</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="appearance-none bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-lg pr-10"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <input
                type="number"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="150000"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-lg"
                autoFocus
              />
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
                disabled={!currentInput}
                size="lg"
                className="bg-green-600 hover:bg-green-700 px-8"
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