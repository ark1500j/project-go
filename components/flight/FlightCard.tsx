import { PlaneIcon } from '../icons';

interface FlightDetails {
  flightNumber: string;
  airline: string;
  status: string;
  departure: {
    code: string;
    city: string;
    time: string;
    gate: string;
    terminal: string;
  };
  arrival: {
    code: string;
    city: string;
    time: string;
  };
  duration: string;
}

interface FlightCardProps {
  flight: FlightDetails;
}

export default function FlightCard({ flight }: FlightCardProps) {
  const getStatusColor = (status?: string): string => {
    switch (status?.toLowerCase()) {
      case 'delayed':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'landed':
        return 'bg-green-500/10 text-green-400';
      case 'cancelled':
        return 'bg-red-500/10 text-red-400';
      default:
        return 'bg-blue-500/10 text-blue-400';
    }
  };

  return (
    <div className="glass-effect p-6 rounded-2xl">
      {/* Flight header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
            <PlaneIcon />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{flight.flightNumber}</h3>
            <p className="text-gray-400">{flight.airline}</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full ${getStatusColor(flight.status)}`}>
          {flight.status}
        </div>
      </div>

      {/* Flight route */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-center">
          <p className="text-2xl font-bold">{flight.departure.code}</p>
          <p className="text-sm text-gray-400">{flight.departure.city}</p>
          <p className="text-sm text-gray-400">{flight.departure.time}</p>
        </div>

        <div className="flex-1 px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center transform rotate-90">
                <PlaneIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold">{flight.arrival.code}</p>
          <p className="text-sm text-gray-400">{flight.arrival.city}</p>
          <p className="text-sm text-gray-400">{flight.arrival.time}</p>
        </div>
      </div>

      {/* Flight details */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-effect p-4 rounded-xl text-center">
          <p className="text-sm text-gray-400">Gate</p>
          <p className="text-lg font-semibold">{flight.departure.gate}</p>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center">
          <p className="text-sm text-gray-400">Duration</p>
          <p className="text-lg font-semibold">{flight.duration}</p>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center">
          <p className="text-sm text-gray-400">Terminal</p>
          <p className="text-lg font-semibold">{flight.departure.terminal}</p>
        </div>
      </div>
    </div>
  );
}
