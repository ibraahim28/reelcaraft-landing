import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-primary-900">{question}</span>
        <span className="text-primary-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How does ReelCraftAI work?',
      answer: 'ReelCraftAI uses advanced AI technology to generate scripts based on your chosen topic and tone. Then it creates voiceovers using ElevenLabs technology and generates AI images to match your content. Finally, everything is compiled into a cohesive video ready for export and sharing on social media.',
    },
    {
      question: 'Do I need any video editing skills?',
      answer: 'Not at all! ReelCraftAI is designed for users with zero video editing experience. Our intuitive interface guides you through the simple process of creating your video, and our AI handles all the technical aspects of script writing, voiceover generation, and visual creation.',
    },
    {
      question: 'How long does it take to create a video?',
      answer: 'The entire process typically takes between 30-60 seconds for a short video. The exact time depends on the video length and complexity, but our system is optimized for speed while maintaining high quality.',
    },
    {
      question: 'Can I customize the AI-generated content?',
      answer: 'Yes! While the AI generates content automatically, you have the ability to edit the script, choose different voices, adjust the visual style, and make other customizations before finalizing your video.',
    },
    {
      question: 'What formats can I export my videos in?',
      answer: 'ReelCraftAI supports exports in MP4, MOV, and WebM formats. Videos are optimized for various platforms including Instagram, TikTok, YouTube Shorts, and more, with appropriate aspect ratios and quality settings.',
    },
    {
      question: 'Is there a limit to how many videos I can create?',
      answer: 'The number of videos you can create depends on your subscription plan. Free users can create up to 3 videos per month, while paid plans offer higher limits or unlimited creation.',
    },
    {
      question: 'Do I own the rights to the videos I create?',
      answer: 'Yes, you retain full ownership of all content created with ReelCraftAI. You can use the videos for personal or commercial purposes according to your subscription plan.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Got questions? We've got answers
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about ReelCraftAI and creating amazing videos with AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Contact our support team
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;