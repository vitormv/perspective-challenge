import type { TextBlockType } from 'src/types/funnel';

type TextBlockProps = TextBlockType;

export const TextBlock = ({ align, color, text }: TextBlockProps) => (
  <div className="text-2xl font-bold" style={{ color, textAlign: align as any }}>
    {text}
  </div>
);
