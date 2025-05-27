import React from 'react';
import { Lightbulb, FileText, Headphones, Images, Film, ArrowRight } from 'lucide-react';

interface WorkflowStepProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ icon, step, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center text-white font-medium text-lg">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-secondary-200 mt-4"></div>
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-primary-600">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-primary-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WorkflowSection: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Choose Your Topic & Style',
      description: 'Select your video topic, preferred tone, and duration (30 or 60 seconds).',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'AI Generates Your Script',
      description: 'Our AI analyzes your inputs and creates an engaging script optimized for social media.',
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: 'Add Perfect Voiceover',
      description: 'Choose from a variety of AI voices to find the perfect match for your content.',
    },
    {
      icon: <Images className="w-5 h-5" />,
      title: 'Generate Visual Assets',
      description: 'AI automatically creates images that complement your script and enhance your message.',
    },
    {
      icon: <Film className="w-5 h-5" />,
      title: 'Export Your Video',
      description: 'Review your creation and export it ready for upload to your favorite platforms.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 mb-4">
              <ArrowRight className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Simple Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Create stunning videos in just 5 simple steps
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Our streamlined workflow makes video creation effortless, even if you've never made a video before.
            </p>
            
            {/* Workflow steps */}
            <div className="relative">
              {steps.map((step, index) => (
                <WorkflowStep
                  key={index}
                  icon={step.icon}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Right column: Video player mockup */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="rounded-xl shadow-medium overflow-hidden border-8 border-white bg-primary-950">
              <div className="aspect-video w-full bg-primary-900 relative">
                <img 
                  src="https://images.pexels.com/photos/7103238/pexels-photo-7103238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Video creation workflow" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Video UI overlay */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Header */}
                  <div className="p-4 flex justify-between items-center bg-gradient-to-b from-primary-950/80 to-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-secondary-500 animate-pulse"></div>
                      <span className="text-white font-medium">Preview Mode</span>
                    </div>
                    <div className="glass rounded-lg px-2 py-1 text-sm text-white">
                      00:24 / 00:30
                    </div>
                  </div>
                  
                  {/* Center play button */}
                  <div className="flex-grow flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-secondary-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom controls */}
                  <div className="p-4 glass rounded-t-xl">
                    <div className="mb-2">
                      <div className="w-full bg-gray-700/50 rounded-full h-1">
                        <div className="bg-secondary-500 h-1 rounded-full w-4/5 relative">
                          <div className="absolute -top-1.5 right-0 w-4 h-4 rounded-full bg-white border-2 border-secondary-500"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <button className="text-white hover:text-secondary-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 15.536L12 12m0 0L8.464 8.464M12 12l3.536-3.536M12 12l-3.536 3.536" />
                          </svg>
                        </button>
                        <button className="text-white hover:text-secondary-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex space-x-4">
                        <button className="text-white hover:text-secondary-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </button>
                        <button className="text-white hover:text-secondary-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;