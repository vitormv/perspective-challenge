import type { TextBlockType } from 'src/types/funnel';

type TextBlockProps = TextBlockType;

export const TextBlock = ({ align, color, text }: TextBlockProps) => (
  <div className="text-2xl font-display mt-4" style={{ color, textAlign: align as any }}>
    {text}
  </div>
);
