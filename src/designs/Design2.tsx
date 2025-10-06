import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

interface Design2Props {
  children: React.ReactNode;
}

const Design2: React.FC<Design2Props> = ({ children }) => {
  return (
    <div className="design-2 font-display dark">
      <style jsx global>{`
        .design-2 {
          --primary: #f59e0b;
          --secondary: #ef4444;
          --accent: #10b981;
          --background: #0f172a;
          --surface: #1e293b;
          --text: #f1f5f9;
          --text-secondary: #94a3b8;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
        
        .design-2 .hero-fire-message {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fire 2s ease-in-out infinite alternate;
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }
        
        .design-2 .diagonal-separator {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
      
      <div className="bg-slate-900 text-white min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Design2;