export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main orbital rings */}
      <div className="absolute w-[800px] h-[800px] -right-40 top-20">
        <div className="w-full h-full rounded-full border border-white/5 relative animate-spin-slow">
          <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-accent-purple/50 blur-sm" />
        </div>
        <div className="absolute inset-4 rounded-full border border-white/5 animate-spin-slow-reverse" />
      </div>

      {/* Gradient circles */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-accent-purple/30 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute -right-40 top-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* Animated particles */}
      <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-accent-purple rounded-full animate-float" />
      <div className="absolute right-1/3 top-1/4 w-2 h-2 bg-accent-blue rounded-full animate-float-delay" />
      
      {/* Additional particles */}
      <div className="absolute left-1/6 top-1/2 w-1 h-1 bg-accent-pink rounded-full animate-particle-float" />
      <div className="absolute right-1/5 top-1/3 w-1 h-1 bg-accent-purple rounded-full animate-particle-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute left-2/3 top-1/4 w-3 h-3 bg-accent-blue/40 rounded-full animate-float-delay" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute right-2/3 bottom-1/4 w-3 h-3 bg-accent-purple/40 rounded-full animate-float" 
           style={{ animationDuration: '7s' }} />
      
      {/* Curved lines */}
      <svg className="absolute top-1/4 -left-20 w-[400px] h-[800px] stroke-white/5" viewBox="0 0 400 800">
        <path d="M 0 400 Q 200 0 400 400" fill="none" strokeWidth="1" />
        <path d="M 50 450 Q 250 50 450 450" fill="none" strokeWidth="1" className="opacity-50" />
      </svg>

      {/* Elliptic animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slower" />
        <div className="absolute inset-0 w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow" 
             style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-0 w-[300px] h-[300px] border border-white/15 rounded-full animate-spin-slower"
             style={{ animationDuration: '25s' }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-purple/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-pink/5 via-transparent to-transparent" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-5" />
    </div>
  );
} 