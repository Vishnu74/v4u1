import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { ABOUT, FOUNDERS_MESSAGE, HOW_WE_WORK, TEAM_STRUCTURE, SEO_DATA } from '../data/data';
import { CheckCircle, User, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title={SEO_DATA.pages.about.title}
        description={SEO_DATA.pages.about.description}
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
            <h1 className="text-5xl md:text-6xl font-bold mb-8">About V4U</h1>
            <p className="text-2xl text-brand-100 max-w-3xl mx-auto">
              Excellence in steel detailing with a commitment to precision and partnership
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{ABOUT.heading}</h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>{ABOUT.content}</p>
                
                <div className="bg-brand-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-brand-800 mb-4">International Standards</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-brand-700">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                      AISC (American Institute of Steel Construction)
                    </li>
                    <li className="flex items-center text-brand-700">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                      CISC (Canadian Institute of Steel Construction)
                    </li>
                    <li className="flex items-center text-brand-700">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                      ASI (Australian Steel Institute)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=600&fit=crop"
                alt="Steel Construction"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-brand-100">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose V4U?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the steel detailing industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ABOUT.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures quality deliverables on every project
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-200 hidden md:block"></div>

            <div className="space-y-12">
              {HOW_WE_WORK.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:pr-8">
                    <div className={`bg-white p-8 rounded-xl shadow-lg ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center circle for desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">Founder's Message</h2>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="prose prose-lg prose-invert max-w-none">
                {FOUNDERS_MESSAGE.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6 last:mb-0">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <div className="text-xl font-semibold">{FOUNDERS_MESSAGE.signature}</div>
                <div className="text-gray-400">{FOUNDERS_MESSAGE.title}</div>
                <div className="text-gray-500">{FOUNDERS_MESSAGE.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind V4U Steel Detailing Services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_STRUCTURE.map((member, index) => (
              <motion.div
                key={member.position}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-brand-600 font-medium mb-4">{member.position}</div>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;