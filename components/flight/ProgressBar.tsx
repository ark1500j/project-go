export default function ProgressBar({
  progress,
  status,
}: {
  progress: number;
  status: string;
}) {
  const getStatusColor = () => {
    switch (status?.toLowerCase()) {
      case "delayed":
        return "from-yellow-500/50 to-yellow-500/20";
      case "landed":
        return "from-green-500/50 to-green-500/20";
      case "cancelled":
        return "from-red-500/50 to-red-500/20";
      default:
        return "from-accent-purple/50 to-accent-blue/20";
    }
  };

  return (
    <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10" />

      {/* Progress bar */}
      <div
        className={`absolute h-full bg-gradient-to-r ${getStatusColor()} transition-all duration-1000 ease-in-out`}
        style={{ width: `${progress}%` }}
      >
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
      </div>
    </div>
  );
}
