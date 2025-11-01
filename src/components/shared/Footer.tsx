import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../../data/data';
import { Building2, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">{SITE_INFO.name}</div>
                <div className="text-gray-400">{SITE_INFO.tagline}</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert steel detailing services with AISC, CISC & ASI compliance using Tekla Structures.
              Precision in every beam and bolt.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-400" />
                <a href={`tel:${SITE_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {SITE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-400" />
                <a href={`mailto:${SITE_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-brand-400" />
                <a href={SITE_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  V4U Steel Detailing Services
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-400" />
                <span className="text-gray-300">{SITE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Structural Steel Detailing</li>
              <li className="text-gray-300">Metalwork Detailing</li>
              <li className="text-gray-300">Steel Connection Design</li>
              <li className="text-gray-300">Material Take-Off</li>
              <li className="text-gray-300">Point Cloud to BIM</li>
              {/* <li className="text-gray-300">Shop Drawings</li> */}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {SITE_INFO.name}. All rights reserved.
            </div>

            <div className="flex space-x-4">
              <a href={SITE_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};