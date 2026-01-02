import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { CAREERS_DATA, SEO_DATA, SITE_INFO } from '../data/data';
import { Briefcase, MapPin, Clock, ArrowRight, TrendingUp, Globe, Monitor, Heart, CheckCircle } from 'lucide-react';


const Careers: React.FC = () => {
    return (
        <>
            <SEOHead
                title={SEO_DATA.pages.careers.title}
                description={SEO_DATA.pages.careers.description}
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-8">{CAREERS_DATA.hero.title}</h1>
                        <p className="text-2xl text-brand-100 max-w-3xl mx-auto">
                            {CAREERS_DATA.hero.subtitle}
                        </p>
                        <p className="mt-6 text-lg text-brand-200 max-w-2xl mx-auto">
                            {CAREERS_DATA.hero.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us / Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join V4U?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer more than just a job – we offer a pathway to excellence in the steel detailing industry.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CAREERS_DATA.benefits.map((benefit, index) => {
                            const Icon = benefit.icon === 'TrendingUp' ? TrendingUp :
                                benefit.icon === 'Globe' ? Globe :
                                    benefit.icon === 'Monitor' ? Monitor : Heart;

                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-600">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to take the next step in your career? Check out our current openings.
                        </p>
                    </motion.div>

                    <div className="space-y-6 max-w-5xl mx-auto">
                        {CAREERS_DATA.jobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-8 md:flex md:items-center md:justify-between">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-3 mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                                                <Briefcase size={14} className="mr-1" /> {job.type}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                <MapPin size={14} className="mr-1" /> {job.location}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                <Clock size={14} className="mr-1" /> {job.experience}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                        <p className="text-gray-600 mb-6 max-w-2xl">{job.description}</p>

                                        <div className="space-y-2 mb-6 md:mb-0">
                                            <h4 className="text-sm font-semibold text-gray-900">Requirements:</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {job.requirements.map((req, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                                        <CheckCircle size={16} className="text-brand-500 mr-2 mt-0.5 shrink-0" />
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 md:mt-0 md:ml-8 shrink-0">
                                        <a
                                            href={`mailto:${SITE_INFO.email}?subject=Application for ${job.title}`}
                                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors duration-200"
                                        >
                                            Apply Now <ArrowRight size={18} className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Don't see a position that fits? We're always open to talented individuals.</p>
                        <a href={`mailto:${SITE_INFO.email}?subject=General Application`} className="text-brand-600 font-semibold hover:text-brand-700 flex items-center justify-center">
                            Send us your resume <ArrowRight size={16} className="ml-1" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
