import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDesign } from '../../contexts/DesignContext';
import { SITE_INFO, DESIGN_PRESETS } from '../../data/data';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [designDropdownOpen, setDesignDropdownOpen] = useState(false);
  const { currentDesign, setCurrentDesign } = useDesign();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const designOptions = Object.entries(DESIGN_PRESETS).map(([key, preset]) => ({
    value: key,
    label: preset.name,
  }));

  const toggleMobile = () => setIsOpen(!isOpen);
  const toggleDesignDropdown = () => setDesignDropdownOpen(!designDropdownOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* <div className="bg-brand-600 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div> */}

            <div className="px-2 rounded-lg"
            >
              <img
                src="../../../public/assets/v4ulogo1.jpeg" 
                alt="V4U Logo"
                className="h-14 w-14 object-contain"
              />
            </div>

            {/* <div className="hidden sm:block font-bold text-xl text-gray-900">
              {SITE_INFO.name.split(' ')[0]}
            </div> */}




            <div>
              <div className="text-lg font-bold text-gray-900">{SITE_INFO.name.split(' ')[0]}</div>
              <div className="text-xs text-gray-600">Steel Detailing Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === item.href
                    ? 'text-brand-600 border-b-2 border-brand-600'
                    : 'text-gray-700 hover:text-brand-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Design Selector */}
            <div className="relative">
              <button
                onClick={toggleDesignDropdown}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              >
                <span>Design</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${designDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {designDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  {designOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setCurrentDesign(option.value);
                        setDesignDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentDesign === option.value
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-gray-700 hover:text-brand-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Design Selector */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Select Design:</div>
              {designOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setCurrentDesign(option.value);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-2 py-1 text-sm transition-colors rounded ${currentDesign === option.value
                      ? 'bg-brand-100 text-brand-600'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Close dropdown when clicking outside */}
      {designDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setDesignDropdownOpen(false)}
        />
      )}
    </nav>
  );
};