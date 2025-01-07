import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`glass-effect p-5 rounded-xl hover-lift group relative overflow-hidden ${className}`}>
      {/* Gradient border effect */}
      <div className="absolute inset-0 border border-white/10 rounded-xl" />
      <div className="absolute inset-[1px] bg-secondary rounded-xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <div className="w-5 h-5">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
    </div>
  );
}

export default FeatureCard;
