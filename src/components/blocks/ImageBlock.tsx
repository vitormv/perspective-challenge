import type { ImageBlockType } from 'src/types/funnel';

type ImageBlockProps = ImageBlockType;

export const ImageBlock = ({ src }: ImageBlockProps) => (
  <div>
    <img src={src} width="100px" />
  </div>
);
