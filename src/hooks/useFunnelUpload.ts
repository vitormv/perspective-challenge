import { useState } from 'react';
import { FunnelType } from 'src/funnel.types';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { parseJsonSilent } from 'src/utils/parseJsonSilent';

type Props = {
  onUploadSuccess: (funnel: FunnelType) => void;
};
export const useFunnelUpload = ({ onUploadSuccess }: Props) => {
  const [fileName, setFileName] = useState<string>();
  const [uploadedFunnel, setUploadedFunnel] = useLocalStorage<FunnelType | undefined>(
    'uploaded-funnel',
    {} as any,
  );

  const [error, setError] = useState<string | undefined>();

  const uploadFile = (file: File) => {
    setError(undefined);

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const funnelObject = parseJsonSilent(reader.result as string);

      setFileName(file.name);

      if (!funnelObject) {
        setError("Oops, this doesn't look like a valid JSON file. Please try again.");
        return;
      }
      // @todo validate JSON structure

      setUploadedFunnel(funnelObject);
      onUploadSuccess?.(funnelObject);
    });

    reader.readAsText(file);
  };

  return {
    fileName,
    uploadedFunnel,
    error,
    uploadFile,
  };
};
