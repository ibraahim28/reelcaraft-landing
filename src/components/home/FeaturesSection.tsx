import React from 'react';
import { Sparkles, Clock, Wand as MagicWand, Download, PenTool, Network as VoiceNetwork, Image, Palette } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, accentColor }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-soft p-6 hover:shadow-medium transition-all duration-300 h-full">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${accentColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: 'AI Script Generation',
      description: 'Our AI analyzes your topic and tone to create engaging scripts optimized for social media.',
      accentColor: 'bg-primary-600',
    },
    {
      icon: <VoiceNetwork className="w-6 h-6 text-white" />,
      title: 'Natural Voiceovers',
      description: 'Choose from a variety of realistic AI voices to narrate your content perfectly.',
      accentColor: 'bg-secondary-500',
    },
    {
      icon: <Image className="w-6 h-6 text-white" />,
      title: 'AI Image Generation',
      description: 'Automatically create visually striking images that match your script content.',
      accentColor: 'bg-accent-500',
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Multiple Durations',
      description: 'Create 30-second or 60-second videos optimized for different platforms.',
      accentColor: 'bg-primary-600',
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: 'Style Customization',
      description: 'Adjust the visual style, pacing, and transitions to match your brand.',
      accentColor: 'bg-secondary-500',
    },
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: 'One-Click Export',
      description: 'Export your finished videos in multiple formats ready for various platforms.',
      accentColor: 'bg-accent-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Everything you need to create stunning videos
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform helps you create professional-quality content without any technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;