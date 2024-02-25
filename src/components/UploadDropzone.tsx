import { useCallback, useRef, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { FunnelType } from 'src/funnel.types';
import { cn } from 'src/utils/cn';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { parseFunnelFile } from 'src/utils/parseFunnelFile';

type Props = {
  onUploadSuccess: (funnel: FunnelType) => void;
};

export const UploadDropzone = ({ onUploadSuccess }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | undefined>();

  const uploadFile = useCallback(
    (file: File) => {
      setError(undefined);

      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const output = parseFunnelFile(reader.result as string);

        if (output.errorCode) {
          switch (output.errorCode) {
            case 'INVALID_FILE':
              setError("This doesn't look like a valid JSON file. Please try again.");
              break;
            case 'INVALID_JSON':
              setError(
                'It seems to be a JSON file, just not in the way we want. Please try again.',
              );
              break;
            default:
              setError('Something went wrong. Please try again.');
              break;
          }
          return;
        }

        if (output.funnel) {
          onUploadSuccess?.(output.funnel);
        }
      });

      reader.readAsText(file);
    },
    [onUploadSuccess],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], rejection: FileRejection[]) => {
      if (acceptedFiles.length > 1 || rejection.length > 1) {
        setError('We appreciate your enthusiasm, but only one file at a time please.');
        return;
      }
      if (!acceptedFiles || !acceptedFiles.length) return;
      uploadFile(acceptedFiles[0]);
    },
    [uploadFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
  });

  return (
    <div className="flex w-full flex-col gap-4">
      {error && (
        <div
          className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Oops!</strong>&nbsp;
          <span className="sm:inline">{error}</span>
        </div>
      )}

      <label
        className={cn({
          'flex min-h-[160px] flex-1 flex-col justify-center': true,
          'border-2 border-dashed px-4 text-center transition-colors duration-300': true,
          'border-gray-300': !isDragActive,
          'border-green-900 bg-green-50': isDragActive,
        })}
        {...getRootProps()}
      >
        {isDragActive ? (
          <div className="flex flex-col items-center gap-4 text-gray-800">
            <CheckCircleIcon className="h-8 w-8" aria-hidden="true" />
            <span>Drop&apos;it like its hot.</span>
          </div>
        ) : (
          <>
            <p className="text-gray-600">Or upload your own JSON file.</p>
            <p className="text-primary">(Click or Drop a file here)</p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          multiple={false}
          name="previewJson"
          className="mb-10 hidden text-center"
          {...getInputProps()}
        />
      </label>
    </div>
  );
};
