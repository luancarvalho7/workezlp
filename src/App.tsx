import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { WebsiteInput } from './pages/WebsiteInput';
import { NameInput } from './pages/NameInput';
import { EmailInput } from './pages/EmailInput';
import { CompanyNameInput } from './pages/CompanyNameInput';
import { MonthlyRevenueInput } from './pages/MonthlyRevenueInput';
import { CompanyDescriptionInput } from './pages/CompanyDescriptionInput';
import { EmployeeCountSelection } from './pages/EmployeeCountSelection';
import { LocationInput } from './pages/LocationInput';
import { IndustryInput } from './pages/IndustryInput';
import { BusinessModelSelection } from './pages/BusinessModelSelection';
import { AcquisitionChannelsSelection } from './pages/AcquisitionChannelsSelection';
import { CompetitorsInput } from './pages/CompetitorsInput';

type PageType = 
  | 'landing' 
  | 'website' 
  | 'name' 
  | 'email' 
  | 'companyName' 
  | 'monthlyRevenue' 
  | 'companyDescription' 
  | 'employeeCount' 
  | 'location' 
  | 'industry' 
  | 'businessModel' 
  | 'acquisitionChannels' 
  | 'competitors';

interface Response {
  question: string;
  answer: any;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [responses, setResponses] = useState<Response[]>([]);

  const pages: PageType[] = [
    'landing', 'website', 'name', 'email', 'companyName', 
    'monthlyRevenue', 'companyDescription', 'employeeCount', 'location', 
    'industry', 'businessModel', 'acquisitionChannels', 'competitors'
  ];

  const questionMap: Record<PageType, string> = {
    landing: 'Landing',
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

  const handleNext = (value?: any) => {
    // Store the response if not landing page
    if (currentPage !== 'landing' && value !== undefined) {
      const newResponse: Response = {
        question: questionMap[currentPage],
        answer: value
      };
      setResponses(prev => [...prev, newResponse]);
    }
    
    // Navigate to next page
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(pages[currentIndex - 1]);
      // Remove the last response when going back
      if (currentPage !== 'landing') {
        setResponses(prev => prev.slice(0, -1));
      }
    }
  };

  const getEmployeeCount = (selection: string): number => {
    const countMap: Record<string, number> = {
      'Just Me': 1,
      '1-10': 5,
      '10-60': 35,
      '60-200': 130,
      '200+': 500
    };
    return countMap[selection] || 0;
  };

  const handleStartAudit = (competitorsValue: string) => {
    // Add the final competitors response
    const finalResponse: Response = {
      question: questionMap.competitors,
      answer: competitorsValue
    };
    const allResponses = [...responses, finalResponse];
    
    // Process all the collected responses
    const responseMap: Record<string, any> = {};
    allResponses.forEach(response => {
      const key = response.question.toLowerCase().replace(/\s+/g, '');
      responseMap[key] = response.answer;
    });

    const processedData = {
      name: responseMap.companyname || '',
      month_revenue: parseInt(responseMap.monthlyrevenue?.split(' ')[1]) || 0,
      employee_count: getEmployeeCount(responseMap.employeecount),
      country: responseMap.companylocation?.country || '',
      state_ac: responseMap.companylocation?.state || '',
      city: responseMap.companylocation?.city || '',
      industry: typeof responseMap.industry === 'string' ? responseMap.industry.split(',').map((item: string) => item.trim()).filter(Boolean) : [responseMap.industry],
      business_model: [responseMap.businessmodel || ''],
      current_situation: responseMap.companydescription || '',
      Social_Media: {
        Twitter: "",
        Facebook: "",
        LinkedIn: ""
      },
      Acquisition_Channels: Array.isArray(responseMap.acquisitionchannels) ? responseMap.acquisitionchannels : [],
      Competitors: typeof responseMap.maincompetitors === 'string' ? responseMap.maincompetitors.split(',').map((item: string) => item.trim()).filter(Boolean).map((name: string) => ({
        name: name,
        website: `https://www.${name.toLowerCase().replace(/\s+/g, '')}.com`
      })) : []
    };

    console.log('All Responses:', allResponses);
    console.log('Processed Data:', [processedData]);
    alert('Audit started! Check console for data.');
  };

  // Render the appropriate page component
  switch (currentPage) {
    case 'landing':
      return <LandingPage onNext={handleNext} />;
    case 'website':
      return <WebsiteInput onNext={handleNext} onBack={handleBack} />;
    case 'name':
      return <NameInput onNext={handleNext} onBack={handleBack} />;
    case 'email':
      return <EmailInput onNext={handleNext} onBack={handleBack} />;
    case 'companyName':
      return <CompanyNameInput onNext={handleNext} onBack={handleBack} />;
    case 'monthlyRevenue':
      return <MonthlyRevenueInput onNext={handleNext} onBack={handleBack} />;
    case 'companyDescription':
      return <CompanyDescriptionInput onNext={handleNext} onBack={handleBack} />;
    case 'employeeCount':
      return <EmployeeCountSelection onNext={handleNext} onBack={handleBack} />;
    case 'location':
      return <LocationInput onNext={handleNext} onBack={handleBack} />;
    case 'industry':
      return <IndustryInput onNext={handleNext} onBack={handleBack} />;
    case 'businessModel':
      return <BusinessModelSelection onNext={handleNext} onBack={handleBack} />;
    case 'acquisitionChannels':
      return <AcquisitionChannelsSelection onNext={handleNext} onBack={handleBack} />;
    case 'competitors':
      return <CompetitorsInput onStartAudit={handleStartAudit} onBack={handleBack} />;
    default:
      return <LandingPage onNext={handleNext} />;
  }
}

export default App;