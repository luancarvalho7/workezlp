import React, { useState } from 'react';
import { LandingPage } from './components/pages/LandingPage';
import { WebsitePage } from './components/pages/WebsitePage';
import { NamePage } from './components/pages/NamePage';
import { EmailPage } from './components/pages/EmailPage';
import { CompanyNamePage } from './components/pages/CompanyNamePage';
import { MonthlyRevenuePage } from './components/pages/MonthlyRevenuePage';
import { CompanyDescriptionPage } from './components/pages/CompanyDescriptionPage';
import { EmployeeCountPage } from './components/pages/EmployeeCountPage';
import { LocationPage } from './components/pages/LocationPage';
import { IndustryPage } from './components/pages/IndustryPage';
import { BusinessModelPage } from './components/pages/BusinessModelPage';
import { AcquisitionChannelsPage } from './components/pages/AcquisitionChannelsPage';
import { CompetitorsPage } from './components/pages/CompetitorsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [responses, setResponses] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [selectedEmployees, setSelectedEmployees] = useState('');
  const [selectedBusinessModel, setSelectedBusinessModel] = useState('');
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [locationInputs, setLocationInputs] = useState({
    city: '',
    state: '',
    country: ''
  });

  const pages = [
    'landing', 'website', 'name', 'email', 'companyName', 
    'monthlyRevenue', 'companyDescription', 'employeeCount', 'location', 
    'industry', 'businessModel', 'acquisitionChannels', 'competitors'
  ];

  const getCurrentQuestion = () => {
    const questions = {
      website: 'Website URL',
      name: 'Your Name',
      email: 'Email Address',
      companyName: 'Company Name',
      monthlyRevenue: 'Monthly Revenue',
      companyDescription: 'Company Description',
      employeeCount: 'Employee Count',
      location: 'Company Location',
      industry: 'Industry',
      businessModel: 'Business Model',
      acquisitionChannels: 'Acquisition Channels',
      competitors: 'Main Competitors'
    };
    return questions[currentPage] || '';
  };

  const handleNext = (value) => {
    const newResponse = {
      question: getCurrentQuestion(),
      answer: value || currentInput || selectedEmployees || selectedBusinessModel || locationInputs || selectedChannels
    };
    setResponses([...responses, newResponse]);
    setCurrentInput('');
    
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(pages[currentIndex - 1]);
      setResponses(prev => prev.slice(0, -1));
    }
  };

  const getEmployeeCount = (selection) => {
    const countMap = {
      'Just Me': 1,
      '1-10': 5,
      '10-60': 35,
      '60-200': 130,
      '200+': 500
    };
    return countMap[selection] || 0;
  };

  const handleStartAudit = () => {
    const finalResponse = {
      question: getCurrentQuestion(),
      answer: currentInput
    };
    const allResponses = [...responses, finalResponse];
    setResponses(allResponses);
    
    const responseMap = {};
    allResponses.forEach(response => {
      const key = response.question.toLowerCase().replace(/\s+/g, '');
      responseMap[key] = response.answer;
    });

    const processedData = {
      name: responseMap.companyname || '',
      month_revenue: parseInt(responseMap.monthlyrevenue?.replace(/[^\d]/g, '')) || 0,
      employee_count: getEmployeeCount(responseMap.employeecount),
      country: responseMap.companylocation?.country || '',
      state_ac: responseMap.companylocation?.state || '',
      city: responseMap.companylocation?.city || '',
      industry: typeof responseMap.industry === 'string' ? responseMap.industry.split(',').map(item => item.trim()).filter(Boolean) : [responseMap.industry],
      business_model: [responseMap.businessmodel || ''],
      current_situation: responseMap.companydescription || '',
      Social_Media: {
        Twitter: "",
        Facebook: "",
        LinkedIn: ""
      },
      Acquisition_Channels: Array.isArray(responseMap.acquisitionchannels) ? responseMap.acquisitionchannels : [],
      Competitors: typeof responseMap.maincompetitors === 'string' ? responseMap.maincompetitors.split(',').map(item => item.trim()).filter(Boolean).map(name => ({
        name: name,
        website: `https://www.${name.toLowerCase().replace(/\s+/g, '')}.com`
      })) : []
    };

    console.log('All Responses:', allResponses);
    console.log('Processed Data:', [processedData]);
    alert('Audit started! Check console for data.');
  };

  const handleChannelToggle = (channel) => {
    setSelectedChannels(prev => 
      prev.includes(channel) 
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const handleLocationChange = (field, value) => {
    setLocationInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  switch (currentPage) {
    case 'landing':
      return <LandingPage onNext={() => handleNext()} />;
    
    case 'website':
      return (
        <WebsitePage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'name':
      return (
        <NamePage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'email':
      return (
        <EmailPage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'companyName':
      return (
        <CompanyNamePage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'monthlyRevenue':
      return (
        <MonthlyRevenuePage 
          value={currentInput}
          currency={currency}
          onChange={setCurrentInput}
          onCurrencyChange={setCurrency}
          onNext={() => handleNext(`${currency} ${currentInput}`)}
          onBack={handleBack}
        />
      );
    
    case 'companyDescription':
      return (
        <CompanyDescriptionPage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'employeeCount':
      return (
        <EmployeeCountPage 
          selectedEmployees={selectedEmployees}
          onSelect={setSelectedEmployees}
          onNext={() => handleNext(selectedEmployees)}
          onBack={handleBack}
        />
      );
    
    case 'location':
      return (
        <LocationPage 
          locationInputs={locationInputs}
          onChange={handleLocationChange}
          onNext={() => handleNext(locationInputs)}
          onBack={handleBack}
        />
      );
    
    case 'industry':
      return (
        <IndustryPage 
          value={currentInput}
          onChange={setCurrentInput}
          onNext={() => handleNext(currentInput)}
          onBack={handleBack}
        />
      );
    
    case 'businessModel':
      return (
        <BusinessModelPage 
          selectedBusinessModel={selectedBusinessModel}
          onSelect={setSelectedBusinessModel}
          onNext={() => handleNext(selectedBusinessModel)}
          onBack={handleBack}
        />
      );
    
    case 'acquisitionChannels':
      return (
        <AcquisitionChannelsPage 
          selectedChannels={selectedChannels}
          onToggle={handleChannelToggle}
          onNext={() => handleNext(selectedChannels)}
          onBack={handleBack}
        />
      );
    
    case 'competitors':
      return (
        <CompetitorsPage 
          value={currentInput}
          onChange={setCurrentInput}
          onStartAudit={handleStartAudit}
          onBack={handleBack}
        />
      );
    
    default:
      return null;
  }
}

export default App;