interface ProgressBarProps {
  current: number
  max: number
}

function ProgressBar({ current, max }: ProgressBarProps) {
  const value = Math.floor((current / max) * 100)
  const valueAsPercentage = `${value}%`
  console.log("this is value", value);
  return (
    <div className="absolute inset-x-0 top-0 h-3" data-testid="progress-bar-container">
      <div
        className="h-full bg-primary-600"
        style={{
          
          width: valueAsPercentage,
          transition: 'width 0.5s ease-in-out'
        }}
      />
    </div>
  )
}

export default ProgressBar
