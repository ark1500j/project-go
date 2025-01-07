import { useState } from 'react';
import Link from 'next/link';

interface PlaneIconProps {
  className?: string;
}

const PlaneIcon: React.FC<PlaneIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className || 'w-6 h-6'} fill="none" stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.5M15 11h3.945M6.5 7h11M9 3.5h6" 
      transform="rotate(-45 12 12)"
    />
  </svg>
);

const AviationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-white hover:text-[#7C5DFA] transition-colors"
        aria-label="Menu"
      >
        <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}>
          <PlaneIcon />
        </div>
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg transition-all duration-300 z-40
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0B] transform transition-transform duration-300
          border-l border-white/10 flex flex-col z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-6">
            <div className="flex flex-col gap-4">
              <Link 
                href="/auth/login"
                className="text-gray-400 hover:text-white transition-colors py-3 flex items-center gap-3 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
              <Link 
                href="/auth/signup"
                className="bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <PlaneIcon />
                Get Started
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="flex justify-center">
              <PlaneIcon className="text-white/10 w-8 h-8 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AviationMenu;
