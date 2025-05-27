import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import CreateVideoForm from './CreateVideoForm';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: CTA text */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-800 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Start Creating</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to transform your <span className="text-secondary-500">content creation</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of creators who are saving hours of work while producing high-quality content that engages their audience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="ml-3 text-gray-600">Generate professional scripts in seconds</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="ml-3 text-gray-600">Create natural-sounding voiceovers</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="ml-3 text-gray-600">Automatically generate matching visuals</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="ml-3 text-gray-600">Export ready-to-publish videos in minutes</p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center">
              <Button 
                variant="primary" 
                size="lg" 
              >
                Get Started For Free
              </Button>
              
              <span className="ml-4 text-sm text-gray-500">
                No credit card required
              </span>
            </div>
          </div>
          
          {/* Right column: Form */}
          <div>
            <CreateVideoForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;