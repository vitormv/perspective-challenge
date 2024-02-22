import { ChangeEventHandler, useRef, useState } from 'react';
import { FunnelType } from 'src/funnel.types';
import { cn } from 'src/utils/cn';
import { parseJsonSilent } from 'src/utils/parseJsonSilent';

type ChooseFunnelFileProps = {
  onLoadJson: (funnel: FunnelType | undefined) => void;
};

export const ChooseFunnelFile = ({ onLoadJson }: ChooseFunnelFileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [hasError, setError] = useState(false);

  const showSampleHandler = () => {
    setFileName('');
    onLoadJson(undefined);
    setError(false);
  };

  const onUploadFile: ChangeEventHandler<HTMLInputElement> = (e: any) => {
    setError(false);
    const uploadedFile = e.target.files[0];

    if (!uploadedFile) {
      showSampleHandler();
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const funnelObject = parseJsonSilent(reader.result as string);

      setFileName(uploadedFile.name);

      if (funnelObject) {
        onLoadJson(funnelObject);
      } else {
        setError(true);
      }

      // @todo handle invalid file
    });

    reader.readAsText(e.target.files[0]);
  };

  const hasFileName = fileName !== '';

  return (
    <div className="flex w-full justify-stretch gap-1 text-center">
      <button
        onClick={showSampleHandler}
        className={cn({
          'grow p-4': true,
          'bg-primary text-white': !hasFileName,
        })}
      >
        Use sample
      </button>

      <label
        className={cn({
          'grow p-4': true,
          'bg-primary text-white': hasFileName,
          'border-solid border-red-600 bg-red-200': hasError && hasFileName,
        })}
      >
        <input
          ref={inputRef}
          type="file"
          multiple={false}
          name="previewJson"
          onChange={onUploadFile}
          className="mb-10 hidden text-center"
        />
        {hasFileName ? `Showing ${fileName}` : "Click or drag'n'drop"}
      </label>
    </div>
  );
};
