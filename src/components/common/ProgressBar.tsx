import { useEffect, useState } from 'react';

interface Props {
  steps: number;
  currentStep: number;
}

export const ProgressBar = ({ steps, currentStep }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // set the progress only after mount on purpose, so that the animation is visible to the user
    setProgress((currentStep / steps) * 100);
  }, [currentStep, steps]);

  if (steps < 2) return null;

  return (
    <div className="flex h-1 bg-sky-200">
      <div
        className={`h-1 bg-sky-600 transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
