import { ImageBlockType } from 'src/funnel.types';

type Props = ImageBlockType;

export const ImageBlock = ({ src }: Props) => (
  <div>
    <img className="rounded-lg" src={src} width="100%" />
  </div>
);
