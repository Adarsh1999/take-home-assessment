interface ProgressBarProps {
  current: number;
  max: number;
}

function ProgressBar({ current, max }: ProgressBarProps) {
  // Calculate the value as a percentage
  const value = Math.floor((current / max) * 100);
  const valueAsPercentage = `${value}%`;

  return (
    // Container for the progress bar
    <div
      className="absolute inset-x-0 top-0 z-20" // Set a higher z-index for the parent container
      data-testid="progress-bar-container"
    >
      <div className="relative h-3">
        {/* Progress bar */}
        <div
          className="absolute top-0 left-0 h-full bg-primary-600"
          style={{
            width: valueAsPercentage,
            transition: 'width 0.5s ease-in-out',
            borderRadius: '0.25rem',
          }}
        />
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <span
              className="text-xs font-bold text-black absolute top-1/2 transform -translate-y-1/2"
              style={{
                zIndex: 2, // Set a higher z-index for the percentage text
              }}
            >
              {value}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
