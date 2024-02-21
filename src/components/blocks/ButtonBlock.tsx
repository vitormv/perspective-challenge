import { CSSProperties } from 'react';
import { useMemo } from 'react';
import type { ButtonBlockType } from 'src/types/funnel';
import { getHoverColor } from 'src/utils/colors/getHoverColor';

type ButtonBlockProps = ButtonBlockType;

export const ButtonBlock = ({ text, color, bgColor }: ButtonBlockProps) => {
  const bgHoverColor = useMemo(() => getHoverColor(bgColor), [bgColor]);

  return (
    <div
      className="self-center"
      style={
        { '--color': color, '--bgColor': bgColor, '--bgColorHover': bgHoverColor } as CSSProperties
      }
    >
      <button className="font-bold py-2 px-6 min-w-[120px] rounded filter active:scale-90 transition-all duration-200 ease-in-out text-[var(--color)] bg-[var(--bgColor)] hover:bg-[var(--bgColorHover)]">
        {text}
      </button>
    </div>
  );
};
