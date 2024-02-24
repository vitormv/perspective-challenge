import { TextBlockType } from 'src/funnel.types';
import { cn } from 'src/utils/cn';

type TextBlockProps = TextBlockType & { hasAppearAnimation?: boolean };

export const TextBlock = ({ align, color, text, hasAppearAnimation = false }: TextBlockProps) => (
  <div
    className={cn({
      'mt-4 font-display text-2xl': true,
      'animate-title-appear': hasAppearAnimation,
    })}
    style={{ color, textAlign: align as any }}
  >
    {text}
  </div>
);
