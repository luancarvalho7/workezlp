import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, ArrowLeft, TrendingUp } from 'lucide-react';

interface AcquisitionChannelsPageProps {
  selectedChannels: string[];
  onToggle: (channel: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function AcquisitionChannelsPage({ selectedChannels, onToggle, onNext, onBack }: AcquisitionChannelsPageProps) {
  const channels = [
    'Direct Sales',
    'Channel Partners',
    'Online Marketing',
    'Social Media',
    'Content Marketing',
    'Email Marketing',
    'Referrals',
    'Paid Advertising',
    'SEO/Organic Search',
    'Trade Shows/Events',
    'Cold Outreach',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What are your acquisition channels?</h2>
            <p className="text-gray-400 text-lg">How do you currently get customers? (Select all that apply)</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4">
              {channels.map((channel) => (
                <button
                  key={channel}
                  onClick={() => onToggle(channel)}
                  className={`w-full px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    selectedChannels.includes(channel)
                      ? 'bg-pink-600 text-white border-2 border-pink-500'
                      : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                  }`}
                >
                  {channel}
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
                onClick={onNext}
                disabled={selectedChannels.length === 0}
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 px-8"
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