import type { ButtonBlockType } from 'src/types/funnel';

type ButtonBlockProps = ButtonBlockType;

export const ButtonBlock = ({ text, color, bgColor }: ButtonBlockProps) => (
  <div className="self-end">
    <button className="font-bold py-2 px-4 rounded" style={{ color, backgroundColor: bgColor }}>
      {text}
    </button>
  </div>
);
