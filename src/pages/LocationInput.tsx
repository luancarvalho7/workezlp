import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, MapPin } from 'lucide-react';

interface LocationInputProps {
  onNext: (value: { city: string; state: string; country: string }) => void;
  onBack: () => void;
}

export function LocationInput({ onNext, onBack }: LocationInputProps) {
  const [locationInputs, setLocationInputs] = useState({
    city: '',
    state: '',
    country: ''
  });

  const handleLocationChange = (field: string, value: string) => {
    setLocationInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (locationInputs.city && locationInputs.state && locationInputs.country) {
      onNext(locationInputs);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <MapPin className="h-16 w-16 mx-auto mb-6 text-red-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Where is your company located?</h2>
            <p className="text-gray-400 text-lg">Tell us your business location</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                {locationInputs.city && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-red-400">
                    City
                  </label>
                )}
                <input
                  type="text"
                  value={locationInputs.city}
                  onChange={(e) => handleLocationChange('city', e.target.value)}
                  placeholder="City"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-lg"
                />
              </div>
              <div className="relative">
                {locationInputs.state && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-red-400">
                    State
                  </label>
                )}
                <input
                  type="text"
                  value={locationInputs.state}
                  onChange={(e) => handleLocationChange('state', e.target.value)}
                  placeholder="State"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-lg"
                />
              </div>
              <div className="relative">
                {locationInputs.country && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-red-400">
                    Country
                  </label>
                )}
                <input
                  type="text"
                  value={locationInputs.country}
                  onChange={(e) => handleLocationChange('country', e.target.value)}
                  placeholder="Country"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-lg"
                />
              </div>
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
                disabled={!locationInputs.country || !locationInputs.state || !locationInputs.city}
                size="lg"
                className="bg-red-600 hover:bg-red-700 px-8"
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