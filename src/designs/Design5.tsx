import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

interface Design5Props {
  children: React.ReactNode;
}

const Design5: React.FC<Design5Props> = ({ children }) => {
  return (
    <div className="design-5 font-display">
      <style jsx global>{`
        .design-5 {
          --primary: #d946ef;
          --secondary: #a21caf;
          --accent: #f59e0b;
          --background: #fafafa;
          --surface: #ffffff;
          --text: #1f2937;
          --text-secondary: #6b7280;
        }
        
        .design-5 .hero-fire-message {
          background: linear-gradient(135deg, #d946ef, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fire 2s ease-in-out infinite alternate;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .design-5 .industrial-texture {
          background: linear-gradient(45deg, #f0abfc 25%, transparent 25%), 
                      linear-gradient(-45deg, #f0abfc 25%, transparent 25%);
          background-size: 60px 60px;
          background-position: 0 0, 30px 30px;
          opacity: 0.05;
        }
        
        .design-5 .steel-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(217, 70, 239, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: steelShine 3s ease-in-out infinite;
        }
        
        .design-5 .heavy-shadow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .design-5 .bold-cta {
          background: linear-gradient(135deg, #d946ef, #f59e0b);
          box-shadow: 0 10px 25px rgba(217, 70, 239, 0.3);
          transform: perspective(1000px) rotateX(0deg);
          transition: all 0.3s ease;
        }
        
        .design-5 .bold-cta:hover {
          transform: perspective(1000px) rotateX(-5deg) translateY(-2px);
          box-shadow: 0 15px 35px rgba(217, 70, 239, 0.4);
        }
      `}</style>
      
      <div className="bg-gray-50 text-gray-900 min-h-screen relative overflow-hidden">
        <div className="industrial-texture absolute inset-0 pointer-events-none"></div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Design5;