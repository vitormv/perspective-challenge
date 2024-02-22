import { CSSProperties } from 'react';
import { useMemo } from 'react';
import { ButtonBlockType } from 'src/funnel.types';
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
      <button className="min-w-[120px] rounded bg-[var(--bgColor)] px-6 py-2 font-bold text-[var(--color)] filter transition-all duration-200 ease-in-out hover:bg-[var(--bgColorHover)] active:scale-90">
        {text}
      </button>
    </div>
  );
};
