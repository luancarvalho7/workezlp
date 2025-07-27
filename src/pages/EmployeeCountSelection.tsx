import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft, Users } from 'lucide-react';

interface EmployeeCountSelectionProps {
  onNext: (value: string) => void;
  onBack: () => void;
}

export function EmployeeCountSelection({ onNext, onBack }: EmployeeCountSelectionProps) {
  const [selectedEmployees, setSelectedEmployees] = useState('');

  const handleNext = () => {
    if (selectedEmployees) {
      onNext(selectedEmployees);
    }
  };

  const employeeOptions = ['Just Me', '1-10', '10-60', '60-200', '200+'];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Users className="h-16 w-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How many employees do you have?</h2>
            <p className="text-gray-400 text-lg">Select your company size</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4">
              {employeeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedEmployees(option)}
                  className={`w-full px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    selectedEmployees === option
                      ? 'bg-blue-600 text-white border-2 border-blue-500'
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
                disabled={!selectedEmployees}
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