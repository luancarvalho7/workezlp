import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';

interface EmailPageProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function EmailPage({ value, onChange, onNext, onBack }: EmailPageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's your email?</h2>
            <p className="text-gray-400 text-lg">We'll send your detailed audit report here</p>
          </div>
          
          <div className="space-y-6">
            <input
              type="email"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg"
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
                onClick={onNext}
                disabled={!value}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-8"
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