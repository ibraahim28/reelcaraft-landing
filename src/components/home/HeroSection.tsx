import React from 'react';
import { Play, Video, Sparkles, Zap } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-800 mb-6 animate-pulse-slow">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-900 mb-6">
              Create <span className="text-secondary-500">stunning videos</span> in seconds with AI
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your ideas into engaging shorts and reels with our AI-powered platform. Generate scripts, voiceovers, and visuals all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg" 
                leftIcon={<Zap className="w-5 h-5" />}
              >
                Start Creating Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                leftIcon={<Play className="w-5 h-5" />}
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>No credit card required • Free plan available</p>
            </div>
          </div>
          
          {/* Right column with mockup */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Main mockup image */}
              <div className="relative z-10 rounded-xl shadow-sharp overflow-hidden border-8 border-white bg-primary-950">
                <div className="aspect-[9/12] w-full bg-primary-800 relative">
                  <img 
                    src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Video creation platform" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Video className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-950 to-transparent">
                    <div className="glass rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-secondary-500 animate-ping-slow"></div>
                        <span className="text-white font-medium">AI generating assets...</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-secondary-500 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="hidden lg:block absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce-slow"></div>
              <div className="hidden lg:block absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-tr from-primary-500 to-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              
              {/* Floating UI elements */}
              <div className="absolute top-8 -right-4 md:-right-12 w-40 glass rounded-lg p-3 shadow-soft transform rotate-6 z-20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span className="text-sm text-primary-900 font-medium">Script Created</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-2 bg-success-500 rounded-full w-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-left-12 glass rounded-lg p-3 shadow-soft transform -rotate-3 z-20">
                <div className="flex items-center mb-1">
                  <Sparkles className="w-4 h-4 text-secondary-500 mr-1" />
                  <span className="text-sm font-medium text-primary-900">Voice Selection</span>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                      V{i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-secondary-100 border-2 border-secondary-500 flex items-center justify-center text-xs">
                    V4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;