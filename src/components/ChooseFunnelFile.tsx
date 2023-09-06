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

  const showSampleHandler = () => {
    setFileName('');
    onLoadJson(undefined);
  };

  const onUploadFile: ChangeEventHandler<HTMLInputElement> = (e: any) => {
    const uploadedFile = e.target.files[0];

    console.log(uploadedFile);

    if (!uploadedFile) {
      showSampleHandler();
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const funnelObject = parseJsonSilent(reader.result as string);

      console.log({ funnelObject, result: reader.result });

      if (funnelObject) {
        onLoadJson(funnelObject);
        setFileName(uploadedFile.name);
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
          'bg-blue-500 text-white ': !hasFileName,
        })}
      >
        Use sample
      </button>

      <label
        className={cn({
          'p-4 grow': true,
          'bg-blue-500 text-white ': hasFileName,
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
