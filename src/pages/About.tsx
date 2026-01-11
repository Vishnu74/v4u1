import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { ABOUT, FOUNDERS_MESSAGE, HOW_WE_WORK, SEO_DATA } from '../data/data';
import { CheckCircle, ClipboardList, PenTool } from 'lucide-react';

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
                    <li className="flex items-center text-brand-700">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                      BS (British Steel)
                    </li>
                    <li className="flex items-center text-brand-700">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                      EUROCODE
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
                src="/assets/newlogo/about.png"
                alt="V4U Team"
                className="rounded-lg shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-brand-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-brand-100">Years Experience</div>
              </div> */}
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
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven process ensures quality deliverables on every project, seamlessly moving from initial concept to final fabrication.
            </p>
          </motion.div>

          <div className="relative">
            {/* Central Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 rounded-full"></div>

            <div className="space-y-16">
              {HOW_WE_WORK.map((step, index) => {
                const Icon = step.icon === 'ClipboardList' ? ClipboardList : step.icon === 'PenTool' ? PenTool : CheckCircle;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 md:w-1/2">
                      <div className={`
                        relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 
                        hover:shadow-2xl transition-all duration-300 group
                        ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12 md:text-left'}
                      `}>
                        {/* Mobile Number Badge */}
                        <div className="md:hidden absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg z-20 border-4 border-gray-50">
                          {step.step}
                        </div>

                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-center`}>
                          <div className="p-3 bg-brand-50 rounded-xl mb-4 text-brand-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <Icon size={32} strokeWidth={1.5} />
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow decorations relating to flow (optional/subtle) */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-2' : '-left-2'} hidden md:block text-brand-200`}>
                          {/* <ArrowRight size={24} className={index % 2 === 0 ? '' : 'rotate-180'} /> */}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1 md:w-1/2"></div>

                    {/* Center Timeline Node */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full border-4 border-brand-500 shadow-xl flex items-center justify-center z-10 transition-transform duration-500 hover:scale-125">
                        <span className="text-brand-700 font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* End Node */}
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-300 rounded-full border-2 border-white shadow-sm"></div>
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
                {/* <div className="text-xl font-semibold">{FOUNDERS_MESSAGE.signature}</div> */}
                {/* <div className="text-gray-400">{FOUNDERS_MESSAGE.title}</div> */}
                <div className="text-gray-500">{FOUNDERS_MESSAGE.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Structure */}
      {/* <section className="py-20 bg-white">
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
      </section> */}
    </>
  );
};

export default About;