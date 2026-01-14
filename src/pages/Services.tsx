import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES, INDUSTRIES, SEO_DATA } from '../data/data';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { InfoModal } from '../components/shared/InfoModal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const openServiceModal = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const openIndustryModal = (industryTitle: string) => {
    setSelectedIndustry(industryTitle);
  };

  const closeIndustryModal = () => {
    setSelectedIndustry(null);
  };

  const selectedServiceData = SERVICES.find(service => service.id === selectedService);
  const selectedIndustryData = INDUSTRIES.find(industry => industry.title === selectedIndustry);

  return (
    <>
      <SEOHead
        title={SEO_DATA.pages.services.title}
        description={SEO_DATA.pages.services.description}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Services</h1>
            <p className="text-2xl text-brand-100 max-w-3xl mx-auto">
              Comprehensive steel detailing solutions with AISC, CISC & ASI compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From structural steel to connection design, we deliver precision in every detail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                imagePath={service.imagePath}
                index={index}
                onClick={() => openServiceModal(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries with specialized solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openIndustryModal(industry.title)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                  <img
                    src={industry.imagePath}
                    alt={industry.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-100 transition-colors">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your steel detailing requirements and how we can help deliver your project with precision.
            </p>
            {/* <button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2">
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5" />
            </button> */}
            <Link
              to="/contact"
              className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
            // className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <InfoModal
        isOpen={!!selectedService && !!selectedServiceData}
        onClose={closeServiceModal}
        title={selectedServiceData?.title || ''}
        description={selectedServiceData?.description || ''}
        imagePath={selectedServiceData?.imagePath || ''}
        features={selectedServiceData?.features}
      />

      {/* Industry Detail Modal */}
      <InfoModal
        isOpen={!!selectedIndustry && !!selectedIndustryData}
        onClose={closeIndustryModal}
        title={selectedIndustryData?.title || ''}
        description={selectedIndustryData?.description || ''}
        imagePath={selectedIndustryData?.imagePath || ''}
      />
    </>
  );
};

export default Services;