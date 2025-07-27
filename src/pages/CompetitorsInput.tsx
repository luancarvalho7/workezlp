import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, TrendingUp } from 'lucide-react';

interface CompetitorsInputProps {
  onStartAudit: (value: string) => void;
  onBack: () => void;
}

export function CompetitorsInput({ onStartAudit, onBack }: CompetitorsInputProps) {
  const [competitors, setCompetitors] = useState('');

  const handleStartAudit = () => {
    if (competitors) {
      onStartAudit(competitors);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who are your main competitors?</h2>
            <p className="text-gray-400 text-lg">List your top competitors (comma-separated)</p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={competitors}
              onChange={(e) => setCompetitors(e.target.value)}
              placeholder="e.g., BullsEye Telecom, EarthLink, Consolidated Communications"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 text-lg"
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
                onClick={handleStartAudit}
                disabled={!competitors}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
              >
                Start My Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}