import { StarIcon } from '../icons';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number; // Optional prop with a default value of 5
}

const TestimonialCard = ({ name, role, content, rating = 5 }:TestimonialCardProps) => {
  return (
    <div className="glass-effect p-4 sm:p-6 rounded-xl group relative w-full">
      {/* Reduced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-pink/10 rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative space-y-3 sm:space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h4 className="font-semibold text-sm group-hover:text-accent-purple transition-colors duration-300">
              {name}
            </h4>
            <p className="text-xs text-gray-400">{role}</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 group-hover:text-white transition-colors duration-300">
          {content}
        </p>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <StarIcon 
              key={i} 
              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" 
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
