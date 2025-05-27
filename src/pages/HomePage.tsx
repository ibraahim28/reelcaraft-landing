import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import WorkflowSection from '../components/home/WorkflowSection';
import CTASection from '../components/home/CTASection';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <CTASection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;