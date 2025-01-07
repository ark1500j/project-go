interface Airport {
  code: string;
  city: string;
  time: string;
  gate: string;
  terminal: string;
}

interface FlightRoute {
  departure: Airport;
  arrival: Airport;
  progress: number;
}

export default function Map({ departure, arrival, progress }: FlightRoute) {
  return (
    <div className="glass-effect p-4 rounded-2xl h-[300px] relative overflow-hidden">
      {/* Placeholder for actual map - we'll implement real mapping later */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5" />

      {/* Simple route visualization */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-md flex items-center justify-between px-12">
          {/* Departure */}
          <div className="text-center">
            <div className="w-4 h-4 rounded-full bg-accent-purple mb-2 mx-auto" />
            <p className="text-sm font-medium">{departure.code}</p>
          </div>

          {/* Flight path */}
          <div className="flex-1 mx-4 relative">
            <div className="h-[2px] bg-white/10 w-full" />
            <div
              className="h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue absolute top-0 left-0 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
            {/* Plane indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000"
              style={{ left: `${progress}%` }}
            >
              <div className="w-6 h-6 -mt-3 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center transform -rotate-45">
                <span className="text-xs">✈️</span>
              </div>
            </div>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <div className="w-4 h-4 rounded-full bg-accent-blue mb-2 mx-auto" />
            <p className="text-sm font-medium">{arrival.code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
