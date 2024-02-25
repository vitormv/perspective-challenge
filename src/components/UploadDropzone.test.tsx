import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { UploadDropzone } from './UploadDropzone';
import { FunnelType } from 'src/funnel.types';

const mockFunnel: FunnelType = {
  name: 'My Custom Funnel',
  bgColor: '#ffffff',
  pages: [
    {
      id: 'page-1',
      blocks: [
        {
          id: 'image-1',
          type: 'image',
          src: 'https://example.com/image.jpg',
        },
      ],
    },
  ],
};

// Create a Blob that looks like a File.
const invalidFunnelFile = new File(['(⌐□_□)'], 'funnel.json', { type: 'application/json' });
const validFunnelFile = new File([JSON.stringify(mockFunnel)], 'funnel.json', {
  type: 'application/json',
});

describe('UploadDropzone', () => {
  it('handles invalid files', async () => {
    // prepare
    const onUploadSuccess = jest.fn();
    const { getByLabelText } = render(<UploadDropzone onUploadSuccess={onUploadSuccess} />);

    // act
    fireEvent.change(getByLabelText(/upload your own JSON file/i), {
      target: { files: [invalidFunnelFile] },
    });

    // assert
    expect(await screen.findByText('Oops!')).toBeVisible();
    expect(onUploadSuccess).not.toHaveBeenCalled();
  });

  it('handles valid json and previews them right away', async () => {
    // prepare
    const onUploadSuccess = jest.fn();
    render(<UploadDropzone onUploadSuccess={onUploadSuccess} />);

    //act
    fireEvent.change(screen.getByLabelText(/upload your own JSON file/i), {
      target: { files: [validFunnelFile] },
    });

    // assert
    await waitFor(() => {
      expect(onUploadSuccess).toHaveBeenCalledWith(expect.objectContaining(mockFunnel));
    });

    expect(screen.queryByText('Oops!')).not.toBeInTheDocument();
  });
});
