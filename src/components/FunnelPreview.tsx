'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fragment, useMemo, useState } from 'react';
import { ChooseFunnelFile } from 'src/components/ChooseFunnelFile';
import { ButtonBlock } from 'src/components/blocks/ButtonBlock';
import { ImageBlock } from 'src/components/blocks/ImageBlock';
import { ListBlock } from 'src/components/blocks/ListBlock';
import { TextBlock } from 'src/components/blocks/TextBlock';
import { FunnelType, PageType } from 'src/types/funnel';
import funnelExample from 'src/content/funnel.sample.json';
import { cn } from 'src/utils/cn';

export const FunnelPreview = () => {
  const [activePage, setActivePage] = useState(0);
  const [uploadedFunnel, setUploadedFunnel] = useState<FunnelType | undefined>();

  const funnel = uploadedFunnel ?? (funnelExample as FunnelType);
  const maxPageIndex = funnel.pages.length - 1;

  const onClickPrevious = () => {
    setActivePage((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const onClickNext = () => {
    setActivePage((currentIndex) => Math.min(maxPageIndex, currentIndex + 1));
  };

  const currentPage = useMemo<PageType>(() => {
    const currentByIndex = funnel.pages.at(activePage);

    if (currentByIndex) return currentByIndex;

    return funnel.pages[0];
  }, [funnel, activePage]);

  return (
    <>
      <div className="w-[375px] mb-10">
        <ChooseFunnelFile onLoadJson={setUploadedFunnel} />
      </div>

      <div className="flex gap-4 items-center">
        <div>
          <button onClick={onClickPrevious}>
            <ChevronLeftIcon
              className={cn({
                'h-20 w-20 text-primary': true,
                'hover:text-blue-700': activePage > 0,
                'text-gray-400 cursor-default': activePage === 0,
              })}
            />
          </button>
        </div>
        <div
          className={`flex flex-col w-[375px] h-[600px] gap-6 overflow-y-auto p-4`}
          style={{ backgroundColor: funnel.bgColor }}
        >
          {currentPage.blocks.map((block) => (
            <Fragment key={block.id}>
              {block.type === 'text' && <TextBlock {...block} />}
              {block.type === 'image' && <ImageBlock {...block} />}
              {block.type === 'list' && <ListBlock {...block} />}
              {block.type === 'button' && <ButtonBlock {...block} />}
            </Fragment>
          ))}
        </div>
        <div>
          <button onClick={onClickNext}>
            <ChevronRightIcon
              className={cn({
                'h-20 w-20 text-primary': true,
                'hover:text-blue-700': activePage < maxPageIndex,
                'text-gray-400 cursor-default': activePage >= maxPageIndex,
              })}
            />
          </button>
        </div>
      </div>
    </>
  );
};
