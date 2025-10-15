import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const blogUrl = `https://${import.meta.env.VITE_HASHNODE_HOST}`;

  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-medium text-gray-800 mb-4 block">
              Psikolog Duygu Aksoy
            </Link>
            <p className="text-gray-600 mt-2 mb-6 text-sm max-w-xs">
              Providing professional psychological support and therapy services
              to help you navigate life's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Pages
            </h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-gray-800 text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800 text-sm">
                About Me
              </Link>
              {/* Updated blog link to point to Hashnode */}
              <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-sm">
                Blog
              </a>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800 text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-600 mt-0.5" />
                <span className="text-gray-600 text-sm">Istanbul, Turkey</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-600" />
                <span className="text-gray-600 text-sm">+90 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-600" />
                <span className="text-gray-600 text-sm">
                  contact@psikologduyguaksoy.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Psikolog Duygu Aksoy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-800 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-800 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
