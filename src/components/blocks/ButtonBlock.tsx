import { CSSProperties } from 'react';
import { useMemo } from 'react';
import { ButtonBlockType } from 'src/funnel.types';
import { getHoverColor } from 'src/utils/colors/getHoverColor';

type Props = ButtonBlockType;

export const ButtonBlock = ({ text, color, bgColor }: Props) => {
  // calculate hover color based on bg color (lighten or darken it a bit depending on the brightness)
  const bgHoverColor = useMemo(() => getHoverColor(bgColor), [bgColor]);

  return (
    <div
      className="mt-4"
      style={
        { '--color': color, '--bgColor': bgColor, '--bgColorHover': bgHoverColor } as CSSProperties
      }
    >
      <button className="block w-full min-w-[120px] rounded bg-[var(--bgColor)] px-10 py-4 font-bold text-[var(--color)] filter transition-all duration-200 ease-in-out hover:bg-[var(--bgColorHover)] active:scale-90">
        {text}
      </button>
    </div>
  );
};
