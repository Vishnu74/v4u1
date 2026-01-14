import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imagePath: string;
    features?: string[];
    ctaLink?: string;
    ctaText?: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    imagePath,
    features,
    ctaLink = "/contact",
    ctaText = "Get Quote"
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 p-2 -mr-2 -mt-2"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        {features && features.length > 0 && (
                                            <>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                                                <ul className="space-y-3 mb-6">
                                                    {features.map((feature, index) => (
                                                        <li key={index} className="flex items-start space-x-3">
                                                            <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-600">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        {!features && (
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Overview</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    V4U Steel Detailing provides specialized solutions for the {title} sector, ensuring precision and compliance with all relevant industry standards.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="h-48 md:h-full rounded-lg overflow-hidden">
                                        <img
                                            src={imagePath}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-brand-50 p-6 rounded-lg">
                                    <h4 className="text-lg font-semibold text-brand-800 mb-3">Why Choose V4U?</h4>
                                    <p className="text-brand-700">
                                        Our team combines years of experience with cutting-edge technology to deliver
                                        precise, fabrication-ready drawings that meet international standards and exceed client expectations.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to={ctaLink}
                                        onClick={onClose}
                                        className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex-1 text-center"
                                    >
                                        {ctaText}
                                    </Link>
                                    <button
                                        onClick={onClose}
                                        className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
