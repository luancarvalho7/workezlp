import { RainbowButton } from "./components/ui/rainbow-button"
import { useEffect, useState } from "react"
import React from 'react';
import { Button } from './components/ui/button';
import { ArrowRight, ArrowLeft, Globe, Mail, User, Building, DollarSign, Users, MapPin, Briefcase, Target, FileText, Zap, ChevronDown } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<any[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [selectedEmployees, setSelectedEmployees] = useState('');
  const [selectedBusinessModel, setSelectedBusinessModel] = useState('');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [locationLabels, setLocationLabels] = useState({
    city: false,
    state: false,
    country: false
  });
  const [locationData, setLocationData] = useState({
    city: '',
    state: '',
    country: ''
  });

  const currencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'CAD', symbol: 'C$' },
    { code: 'AUD', symbol: 'A$' },
    { code: 'JPY', symbol: '¥' }
  ];

  const employeeOptions = [
    'Just Me',
    '1-10',
    '10-60',
    '60-200',
    '200+'
  ];

  const businessModelOptions = [
    'B2B',
    'B2C',
    'B2B2C'
  ];

  const acquisitionChannelOptions = [
    'Direct Sales',
    'Channel Partners',
    'Online Marketing',
    'Social Media',
    'Content Marketing',
    'Email Marketing',
    'Referrals',
    'Events/Trade Shows',
    'SEO/SEM',
    'Cold Outreach'
  ];

  const handleNext = (value?: any) => {
    let responseValue = value !== undefined ? value : currentInput;
    
    // Store the response
    const newResponses = [...responses];
    newResponses[currentPage] = responseValue;
    setResponses(newResponses);
    
    setCurrentInput('');
    setCurrentPage(prev => prev + 1);
  };

  const handleLocationNext = () => {
    const locationResponse = {
      city: locationData.city,
      state: locationData.state,
      country: locationData.country
    };
    handleNext(locationResponse);
  };

  const handleChannelToggle = (channel: string) => {
    setSelectedChannels(prev => 
      prev.includes(channel) 
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const handleBack = () => {
    setCurrentPage(prev => prev - 1);
  };

  const handleSubmit = () => {
    // Process all responses into the required format
    const processedData = {
      name: responses[3] || '', // Company name
      month_revenue: parseInt(responses[4]?.toString().replace(/[^0-9]/g, '')) || 0,
      employee_count: responses[5] || '',
      country: responses[6]?.country || '',
      state_ac: responses[6]?.state || '',
      city: responses[6]?.city || '',
      industry: responses[7]?.split(',').map((i: string) => i.trim()).filter((i: string) => i) || [],
      business_model: [responses[8]] || [],
      current_situation: responses[9] || '',
      "Social Media": {
        "Twitter": "",
        "Facebook": "",
        "LinkedIn": ""
      },
      "Acquisition Channels": responses[10] || [],
      "Competitors": responses[11]?.split(',').map((c: string) => c.trim()).filter((c: string) => c).map((name: string) => ({
        name,
        website: `https://www.${name.toLowerCase().replace(/\s+/g, '')}.com`
      })) || []
    };
    
    console.log('Final processed data:', processedData);
  };

  const pages = [
    // Landing Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold font-cormorant leading-tight">
              Get Your Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-shift">Audit</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover hidden opportunities and unlock your website's full potential with our comprehensive analysis
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              onClick={() => handleNext()}
              size="xl"
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-semibold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    ),

    // Website URL Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Globe className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your website URL?
            </h2>
            <p className="text-gray-400 text-lg">
              Enter your website URL so we can analyze it
            </p>
          </div>
          
          <div className="space-y-6">
            <input
              type="url"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Name Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <User className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your name?
            </h2>
            <p className="text-gray-400 text-lg">
              We'd like to personalize your experience
            </p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Your full name"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Email Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Mail className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your email?
            </h2>
            <p className="text-gray-400 text-lg">
              We'll send your detailed audit report here
            </p>
          </div>
          
          <div className="space-y-6">
            <input
              type="email"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Company Name Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Building className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your company name?
            </h2>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Acme Corporation"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Monthly Revenue Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <DollarSign className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your monthly revenue?
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="appearance-none bg-gray-900 border border-gray-700 rounded-xl text-white px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                >
                  {currencies.map(curr => (
                    <option key={curr.code} value={curr.code}>
                      {curr.symbol} {curr.code}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <input
                type="number"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="150000"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
              />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext(`${currencies.find(c => c.code === currency)?.symbol}${currentInput}`)}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Company Description Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <FileText className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              Describe what your company does very briefly
            </h2>
          </div>
          
          <div className="space-y-6">
            <textarea
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="We provide advanced telecommunications solutions to businesses..."
              rows={4}
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg resize-none"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Employee Count Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Users className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              How many employees do you have?
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3">
              {employeeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedEmployees(option)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium ${
                    selectedEmployees === option
                      ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                      : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext(selectedEmployees)}
                disabled={!selectedEmployees}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Location Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <MapPin className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              Where is your company located?
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                {locationLabels.city && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-yellow-500 font-medium">
                    City
                  </label>
                )}
                <input
                  type="text"
                  value={locationData.city}
                  onChange={(e) => {
                    setLocationData(prev => ({ ...prev, city: e.target.value }));
                    setLocationLabels(prev => ({ ...prev, city: e.target.value.length > 0 }));
                  }}
                  placeholder="City"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                />
              </div>
              
              <div className="relative">
                {locationLabels.state && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-yellow-500 font-medium">
                    State
                  </label>
                )}
                <input
                  type="text"
                  value={locationData.state}
                  onChange={(e) => {
                    setLocationData(prev => ({ ...prev, state: e.target.value }));
                    setLocationLabels(prev => ({ ...prev, state: e.target.value.length > 0 }));
                  }}
                  placeholder="State"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                />
              </div>
              
              <div className="relative">
                {locationLabels.country && (
                  <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-yellow-500 font-medium">
                    Country
                  </label>
                )}
                <input
                  type="text"
                  value={locationData.country}
                  onChange={(e) => {
                    setLocationData(prev => ({ ...prev, country: e.target.value }));
                    setLocationLabels(prev => ({ ...prev, country: e.target.value.length > 0 }));
                  }}
                  placeholder="Country"
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={handleLocationNext}
                disabled={!locationData.city || !locationData.state || !locationData.country}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Industry Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Briefcase className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What industry are you in?
            </h2>
            <p className="text-gray-400 text-lg">
              You can enter multiple industries separated by commas
            </p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Telecommunications, Technology, SaaS"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext()}
                disabled={!currentInput}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Business Model Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Target className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What's your business model?
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3">
              {businessModelOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedBusinessModel(option)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium ${
                    selectedBusinessModel === option
                      ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                      : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext(selectedBusinessModel)}
                disabled={!selectedBusinessModel}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Acquisition Channels Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Zap className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              What are your acquisition channels?
            </h2>
            <p className="text-gray-400 text-lg">
              Select all that apply
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {acquisitionChannelOptions.map((channel) => (
                <button
                  key={channel}
                  onClick={() => handleChannelToggle(channel)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium ${
                    selectedChannels.includes(channel)
                      ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                      : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                  }`}
                >
                  {channel}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => handleNext(selectedChannels)}
                disabled={selectedChannels.length === 0}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),

    // Competitors Page
    () => (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Target className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant">
              Who are your main competitors?
            </h2>
            <p className="text-gray-400 text-lg">
              Enter competitor names separated by commas
            </p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="BullsEye Telecom, EarthLink, Consolidated Communications"
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            />
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!currentInput}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-semibold"
              >
                Start My Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return (
    <div className="min-h-screen">
      {pages[currentPage]()}
    </div>
  );
}

export default App;