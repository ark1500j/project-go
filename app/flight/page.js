"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { PlaneIcon, ClockIcon, DocumentIcon } from "../../components/icons";

export default function TrackFlight() {
  const router = useRouter();
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    { id: 1, flight: "AA1234", date: "2024-03-20", status: "On Time" },
    { id: 2, flight: "UA5678", date: "2024-03-19", status: "Delayed" },
    { id: 3, flight: "DL9012", date: "2024-03-18", status: "Landed" },
  ]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!flightNumber.trim()) return;

    setIsSearching(true);
    try {
      // TODO: Implement actual flight search API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // Add to recent searches
      const newSearch = {
        id: Date.now(),
        flight: flightNumber.toUpperCase(),
        date: date,
        status: "On Time", // This would come from the API in real implementation
      };

      setRecentSearches((prev) => [newSearch, ...prev.slice(0, 4)]); // Keep only last 5 searches

      // Navigate to flight details page
      router.push(`/flight/${flightNumber.toUpperCase()}`);
    } catch (error) {
      console.error("Search failed:", error);
      // TODO: Show error message to user
    } finally {
      setIsSearching(false);
    }
  };

  const handleRecentSearchClick = (search) => {
    setFlightNumber(search.flight);
    setDate(search.date);
    // Automatically trigger search when clicking a recent search
    router.push(`/flight/${search.flight}`);
  };

  const clearHistory = () => {
    setRecentSearches([]);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Track Your <span className="gradient-text">Flight</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter your flight number to get real-time updates, status
            information, and AI-powered insights.
          </p>
        </div>

        {/* Search Form */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Upload Travel Documents</h2>
              <p className="text-sm text-gray-400">
                Upload your ticket PDF to automatically track all flights
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              icon={<DocumentIcon />}
              onClick={() => document.getElementById("ticket-upload").click()}
            >
              Upload PDF
            </Button>
          </div>
          <input
            type="file"
            id="ticket-upload"
            className="hidden"
            accept=".pdf"
            onChange={(e) => {
              // TODO: Implement PDF processing
              console.log("Processing ticket:", e.target.files[0]);
            }}
          />
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Flight Number"
                placeholder="e.g., AA1234"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                icon={<PlaneIcon />}
                className="text-lg"
              />
              <Input
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                icon={<ClockIcon />}
                min={new Date().toISOString().split("T")[0]}
                className="text-lg"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full py-4"
              isLoading={isSearching}
            >
              Track Flight
            </Button>
          </form>
        </div>

        {/* Recent Searches */}
        <div className="glass-effect p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Searches</h2>
            {recentSearches.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearHistory}
                className="text-gray-400 hover:text-white"
              >
                Clear History
              </Button>
            )}
          </div>

          {recentSearches.length > 0 ? (
            <div className="space-y-4">
              {recentSearches.map((search) => (
                <button
                  key={search.id}
                  onClick={() => handleRecentSearchClick(search)}
                  className="w-full glass-effect p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                        <PlaneIcon />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium group-hover:text-accent-purple transition-colors">
                          {search.flight}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {new Date(search.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`
                      px-3 py-1 rounded-full text-sm
                      ${
                        search.status === "On Time"
                          ? "bg-green-500/10 text-green-400"
                          : search.status === "Delayed"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-blue-500/10 text-blue-400"
                      }
                    `}
                    >
                      {search.status}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-8">No recent searches</p>
          )}
        </div>
      </div>
    </div>
  );
}
