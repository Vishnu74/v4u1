import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PROJECTS, SEO_DATA } from '../data/data';
import { ProgressiveImage } from '../components/shared/ProgressiveImage';
import { ImageLightbox } from '../components/shared/ImageLightbox';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedImageAlt(alt);
    setLightboxOpen(true);
  };

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.industry)))];
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.industry === selectedCategory);

  return (
    <>
      <SEOHead
        title={SEO_DATA.pages.projects.title}
        description={SEO_DATA.pages.projects.description}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-brand-900">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              A curated portfolio of precision-engineered steel detailing projects, defining skylines and structures across the globe.
            </p>
            <br />
            <p className="text-lg text-gray-600 leading-relaxed">
              {filteredProjects[0].details}
            </p>
          </motion.div>

          {/* Filter Categories */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-brand-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Projects Vertical Gallery */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="project-section"
            >
              {/* Project Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                {/* <span className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block">
                  {project.industry}
                </span> */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {project.title}
                </h2>
                {/* <div className="w-20 h-1 bg-brand-200 mx-auto mb-8" /> */}
                {/* <p className="text-lg text-gray-600 leading-relaxed">
                  {project.details}
                </p> */}
              </div>

              {/* Image Gallery - Full Display of All Snaps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                      // If there's an odd number of images, make the first one full width for visual balance, 
                      // ONLY if it's the very first image of the set.
                      (project.images.length % 2 !== 0 && imgIndex === 0) ? 'md:col-span-2' : ''
                      }`}
                  >
                    <ProgressiveImage
                      src={image}
                      alt={`${project.title} view ${imgIndex + 1}`}
                      className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700 ease-in-out cursor-pointer"
                      onClick={() => handleImageClick(image, `${project.title} view ${imgIndex + 1}`)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage}
        altText={selectedImageAlt}
      />
    </>
  );
};

export default Projects;