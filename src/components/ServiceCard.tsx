import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  imagePath: string;
  index: number;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  imagePath,
  index,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop';
          }}
        />

        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-brand-600 font-semibold text-sm">Premium Service</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <button className="text-brand-600 hover:text-brand-700 font-semibold flex items-center space-x-2 transition-all duration-300 group-hover:space-x-3">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
            <ArrowRight className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-200 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
    </motion.div>
  );
};
