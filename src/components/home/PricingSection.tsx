import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  cta: string;
  popular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  cta, 
  popular = false 
}) => {
  return (
    <div className={`
      rounded-2xl overflow-hidden transition-all duration-300
      ${popular 
        ? 'shadow-medium border-2 border-secondary-500 transform hover:-translate-y-1' 
        : 'border border-gray-200 shadow-soft hover:shadow-medium'
      }
    `}>
      {popular && (
        <div className="bg-secondary-500 py-2 px-4 text-center">
          <span className="text-sm font-medium text-primary-900">Most Popular</span>
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-primary-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          variant={popular ? "secondary" : "primary"}
          fullWidth
        >
          {cta}
        </Button>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-500 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
              ) : (
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 text-gray-400" />
                </div>
              )}
              <span className="ml-3 text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      title: 'Basic',
      price: 'Free',
      description: 'Perfect for trying out the platform.',
      cta: 'Get Started',
      features: [
        { included: true, text: '3 videos per month' },
        { included: true, text: '30-second maximum length' },
        { included: true, text: 'Standard AI voices' },
        { included: true, text: 'Basic image generation' },
        { included: false, text: 'HD export quality' },
        { included: false, text: 'Priority processing' },
        { included: false, text: 'Remove watermark' },
        { included: false, text: 'Custom branding' },
      ],
    },
    {
      title: 'Creator',
      price: '$29',
      description: 'For content creators and social media managers.',
      cta: 'Start Free Trial',
      popular: true,
      features: [
        { included: true, text: '30 videos per month' },
        { included: true, text: 'Up to 60-second videos' },
        { included: true, text: 'Premium AI voices' },
        { included: true, text: 'Advanced image generation' },
        { included: true, text: 'HD export quality' },
        { included: true, text: 'Priority processing' },
        { included: true, text: 'Remove watermark' },
        { included: false, text: 'Custom branding' },
      ],
    },
    {
      title: 'Business',
      price: '$79',
      description: 'For teams and businesses with high volume needs.',
      cta: 'Contact Sales',
      features: [
        { included: true, text: 'Unlimited videos' },
        { included: true, text: 'Up to 3-minute videos' },
        { included: true, text: 'All premium voices' },
        { included: true, text: 'Studio-quality image generation' },
        { included: true, text: '4K export quality' },
        { included: true, text: 'Priority processing' },
        { included: true, text: 'Remove watermark' },
        { included: true, text: 'Custom branding' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-800 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-lg text-gray-600">
            All plans include our core features. Upgrade anytime as your content creation needs grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              popular={tier.popular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="outline">
            Contact our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;