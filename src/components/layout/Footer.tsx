import React from 'react';
import { Video, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Video className="h-6 w-6 text-secondary-500 mr-2" />
              <span className="text-xl font-medium">ReelCraft<span className="text-secondary-500">AI</span></span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Create professional quality shorts and reels in seconds using the power of AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-secondary-500 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-secondary-500 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-secondary-500 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-secondary-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ReelCraftAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;