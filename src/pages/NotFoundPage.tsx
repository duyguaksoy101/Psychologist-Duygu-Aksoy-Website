import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="w-full flex items-center justify-center pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <Search size={64} className="mx-auto text-gray-300 mb-6" />
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
