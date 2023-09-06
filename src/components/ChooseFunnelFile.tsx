import { ChangeEventHandler, Fragment, useMemo, useRef, useState } from 'react';
import { FunnelType, PageType } from 'src/types/funnel';
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
    <div className="flex gap-1 justify-stretch w-full text-center">
      <button
        onClick={showSampleHandler}
        className={cn({
          'p-4 grow': true,
          'bg-blue-500 text-white': !hasFileName,
        })}
      >
        Use sample
      </button>

      <label
        className={cn({
          'p-4 grow': true,
          'bg-blue-500 text-white': hasFileName,
          'border-solid bg-red-200 border-red-600': hasError && hasFileName,
        })}
      >
        <input
          ref={inputRef}
          type="file"
          multiple={false}
          name="previewJson"
          onChange={onUploadFile}
          className="text-center mb-10 hidden"
        />
        {hasFileName ? `Showing ${fileName}` : "Click or drag'n'drop"}
      </label>
    </div>
  );
};
