'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useMemo, useState } from 'react';
import { ButtonBlock } from 'src/components/blocks/ButtonBlock';
import { ImageBlock } from 'src/components/blocks/ImageBlock';
import { ListBlock } from 'src/components/blocks/ListBlock';
import { TextBlock } from 'src/components/blocks/TextBlock';
import { FunnelType, PageType } from 'src/types/funnel';

type FunnelPreviewProps = {
  funnel: FunnelType;
};

export const FunnelPreview = ({ funnel }: FunnelPreviewProps) => {
  const [activePage, setActivePage] = useState(0);

  const onClickPrevious = () => {
    setActivePage((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const onClickNext = () => {
    setActivePage((currentIndex) => Math.min(funnel.pages.length - 1, currentIndex + 1));
  };

  const currentPage = useMemo<PageType>(() => {
    const currentByIndex = funnel.pages.at(activePage);

    if (currentByIndex) return currentByIndex;

    return funnel.pages[0];
  }, [funnel, activePage]);

  return (
    <div className="flex gap-4 items-center">
      <div>
        <button onClick={onClickPrevious}>
          <ChevronLeftIcon className="h-20 w-20 text-blue-500 hover:text-blue-700" />
        </button>
      </div>
      <div className={`w-[375px] h-[600px]`} style={{ backgroundColor: funnel.bgColor }}>
        <div key={currentPage.id}>
          {currentPage.blocks.map((block) => (
            <>
              {block.type === 'text' && <TextBlock {...block} />}
              {block.type === 'image' && <ImageBlock {...block} />}
              {block.type === 'list' && <ListBlock {...block} />}
              {block.type === 'button' && <ButtonBlock {...block} />}
            </>
          ))}
        </div>
      </div>
      <div>
        <button onClick={onClickNext}>
          <ChevronRightIcon className="h-20 w-20 text-blue-500 hover:text-blue-700" />
        </button>
      </div>
    </div>
  );
};