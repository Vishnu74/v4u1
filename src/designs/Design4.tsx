import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

interface Design4Props {
  children: React.ReactNode;
}

const Design4: React.FC<Design4Props> = ({ children }) => {
  return (
    <div className="design-4 font-mono">
      <style jsx global>{`
        .design-4 {
          --primary: #2563eb;
          --secondary: #1e40af;
          --accent: #0ea5e9;
          --background: #f8fafc;
          --surface: #ffffff;
          --text: #1e3a8a;
          --text-secondary: #475569;
          background-image: 
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: blueprintGrid 20s linear infinite;
        }
        
        .design-4 .hero-fire-message {
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fire 2s ease-in-out infinite alternate;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .design-4 .blueprint-border {
          border: 2px dashed #2563eb;
          position: relative;
        }
        
        .design-4 .blueprint-border::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 1px solid #60a5fa;
          pointer-events: none;
        }
        
        .design-4 .technical-grid {
          background-image: 
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      
      <div className="bg-slate-50 text-blue-900 min-h-screen">
        <Navbar />
        <main className="technical-grid">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Design4;