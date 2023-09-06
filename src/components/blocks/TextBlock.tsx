import type { TextBlockType } from 'src/types/funnel';

type TextBlockProps = TextBlockType;

export const TextBlock = ({ align, color, text }: TextBlockProps) => <div>{text}</div>;
