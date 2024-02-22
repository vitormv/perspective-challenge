import { ImageBlockType } from 'src/funnel.types';

type ImageBlockProps = ImageBlockType;

export const ImageBlock = ({ src }: ImageBlockProps) => (
  <div>
    <img className="rounded-lg" src={src} width="100%" />
  </div>
);
