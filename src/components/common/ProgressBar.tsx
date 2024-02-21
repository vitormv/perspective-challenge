interface Props {
  steps: number;
  currentStep: number;
}

export const ProgressBar = ({ steps, currentStep }: Props) => {
  const progress = (currentStep / steps) * 100;

  return (
    <div className="flex h-1 bg-gray-200">
      <div
        className={`h-1 bg-primary transition-all ease-out duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
