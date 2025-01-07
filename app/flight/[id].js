import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FlightCard from '../../components/flight/FlightCard';
import ProgressBar from '../../components/flight/ProgressBar';
import Map from '../../components/flight/Map';
import Button from '../../components/common/Button';
import { BellIcon } from '../../components/icons';

export default function FlightDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [flight, setFlight] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Simulate API call to fetch flight details
    const fetchFlight = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock flight data
        setFlight({
          flightNumber: id,
          airline: 'American Airlines',
          status: 'On Time',
          progress: 65,
          departure: {
            code: 'JFK',
            city: 'New York',
            time: '10:00 AM',
            gate: 'B12',
            terminal: 'T2'
          },
          arrival: {
            code: 'LAX',
            city: 'Los Angeles',
            time: '1:30 PM',
            gate: 'C15',
            terminal: 'T4'
          },
          duration: '3h 30m'
        });
        
        setProgress(65); // This would come from the API
      } catch (error) {
        console.error('Failed to fetch flight:', error);
        // TODO: Show error state
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlight();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-purple"></div>
      </div>
    );
  }

  if (!flight) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Flight not found</h1>
          <Button onClick={() => router.push('/flight/track')}>
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            Flight <span className="gradient-text">{flight.flightNumber}</span>
          </h1>
          <Button
            variant="secondary"
            size="sm"
            icon={<BellIcon />}
            onClick={() => {/* TODO: Implement notifications */}}
          >
            Get Notifications
          </Button>
        </div>

        {/* Flight Card */}
        <div className="mb-8">
          <FlightCard flight={flight} />
        </div>

        {/* Progress Section */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <h2 className="text-lg font-semibold mb-4">Flight Progress</h2>
          <ProgressBar progress={progress} status={flight.status} />
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>{flight.departure.time}</span>
            <span className="text-accent-blue">Airborne</span>
            <span>{flight.arrival.time}</span>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <Map 
            departure={flight.departure}
            arrival={flight.arrival}
            progress={progress}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => router.push('/flight/track')}
          >
            Track Another Flight
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => {/* TODO: Implement share */}}
          >
            Share Flight
          </Button>
        </div>
      </div>
    </div>
  );
}
