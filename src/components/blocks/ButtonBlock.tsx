import type { ButtonBlockType } from 'src/types/funnel';

type ButtonBlockProps = ButtonBlockType;

export const ButtonBlock = ({ text, color, bgColor }: ButtonBlockProps) => (
  <div>
    <button style={{ color, backgroundColor: bgColor }}>{text}</button>
  </div>
);
