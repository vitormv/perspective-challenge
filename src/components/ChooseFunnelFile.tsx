import { ChangeEventHandler, useRef } from 'react';
import { FunnelType } from 'src/funnel.types';
import { useFunnelUpload } from 'src/hooks/useFunnelUpload';

type Props = {
  onUploadSuccess: (funnel: FunnelType) => void;
};

export const ChooseFunnelFile = ({ onUploadSuccess }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { error, uploadFile } = useFunnelUpload({ onUploadSuccess });

  const onFileSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    const uploadedFile = e.target.files?.[0];

    if (!uploadedFile) {
      return;
    }

    uploadFile(uploadedFile);
  };

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <div
          className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Oops!</strong>
          <span className="sm:inline">{error}</span>
        </div>
      )}

      <label className="border-2 border-dashed border-gray-300 p-10 text-center">
        <p className="text-gray-600">Or upload your own JSON file.</p>
        <p className="text-primary">Click or Drop a file here.</p>

        <input
          ref={inputRef}
          type="file"
          multiple={false}
          name="previewJson"
          onChange={onFileSelected}
          className="mb-10 hidden text-center"
        />
      </label>
    </div>
  );
};
