import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import jobImage from '.././assets/joblogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img
                src={jobImage}
                alt="RojgariHub Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">RojgariHub</span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700">Find Jobs</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Browse Companies</a>
            </nav>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors" 
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors" 
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-700">Find Jobs</a>
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-700">Browse Companies</a>
              <div className="border-t pt-2 mt-2">
                <button 
                  className="block w-full text-left px-3 py-2 text-gray-500 hover:text-gray-700"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mt-2"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;