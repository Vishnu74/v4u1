import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

interface Design1Props {
  children: React.ReactNode;
}

const Design1: React.FC<Design1Props> = ({ children }) => {
  return (
    <div className="design-1 font-display">
      <style jsx global>{`
        .design-1 {
          --primary: #1a856f;
          --secondary: #334155;
          --accent: #3b82f6;
          --background: #ffffff;
          --surface: #f8fafc;
          --text: #1e293b;
          --text-secondary: #64748b;
        }
        
        .design-1 .hero-fire-message {
          background: linear-gradient(135deg, #1a856f, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fire 2s ease-in-out infinite alternate;
        }
      `}</style>
      
      <Navbar />
      <main className="bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Design1;