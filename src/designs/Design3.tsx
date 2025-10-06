import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

interface Design3Props {
  children: React.ReactNode;
}

const Design3: React.FC<Design3Props> = ({ children }) => {
  return (
    <div className="design-3 font-body">
      <style jsx global>{`
        .design-3 {
          --primary: #4f46e5;
          --secondary: #7c3aed;
          --accent: #06b6d4;
          --background: #ffffff;
          --surface: #fefefe;
          --text: #111827;
          --text-secondary: #6b7280;
          line-height: 1.7;
        }
        
        .design-3 .hero-fire-message {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fire 2s ease-in-out infinite alternate;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        
        .design-3 .magazine-layout {
          column-gap: 2rem;
          line-height: 1.8;
        }
        
        .design-3 .vertical-rhythm > * + * {
          margin-top: 2rem;
        }
      `}</style>
      
      <div className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto px-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Design3;