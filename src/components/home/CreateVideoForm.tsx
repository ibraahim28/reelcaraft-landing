import React, { useState } from 'react';
import { Wand2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { VideoTone, VideoLength } from '../../types';

const toneOptions = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'enthusiastic', label: 'Enthusiastic' },
  { value: 'humorous', label: 'Humorous' },
  { value: 'serious', label: 'Serious' },
  { value: 'inspirational', label: 'Inspirational' },
];

const durationOptions = [
  { value: '30', label: '30 seconds' },
  { value: '60', label: '60 seconds' },
];

interface CreateVideoFormData {
  topic: string;
  tone: VideoTone;
  duration: VideoLength;
}

const CreateVideoForm: React.FC = () => {
  const [formData, setFormData] = useState<CreateVideoFormData>({
    topic: '',
    tone: 'professional',
    duration: '30',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      // Redirect to a creation page in a real implementation
    }, 2000);
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Create Your Video Now
          </h3>
          <p className="text-primary-100 max-w-xl mx-auto">
            Start with your topic and let our AI do the rest. We'll generate a script, voiceover, and visuals for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto glass p-6 rounded-xl">
          <div className="mb-6">
            <Input
              label="What's your video about?"
              placeholder="Enter your video topic or idea"
              value={formData.topic}
              onChange={handleChange}
              name="topic"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Select
              label="Choose your tone"
              options={toneOptions}
              value={formData.tone}
              onChange={handleChange}
              name="tone"
            />

            <Select
              label="Video duration"
              options={durationOptions}
              value={formData.duration}
              onChange={handleChange}
              name="duration"
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            fullWidth
            isLoading={isLoading}
            rightIcon={isLoading ? undefined : <ArrowRight className="w-5 h-5" />}
            className="mt-2"
          >
            {isLoading ? "Creating Your Video..." : "Create My Video"}
          </Button>

          <div className="mt-4 text-center text-sm text-primary-200">
            <p className="flex items-center justify-center">
              <Wand2 className="w-4 h-4 mr-1" />
              AI-powered creation takes just 30-60 seconds
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVideoForm;