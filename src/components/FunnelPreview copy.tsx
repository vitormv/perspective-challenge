'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { ChooseFunnelFile } from 'src/components/ChooseFunnelFile';
import { ButtonBlock } from 'src/components/blocks/ButtonBlock';
import { ImageBlock } from 'src/components/blocks/ImageBlock';
import { ListBlock } from 'src/components/blocks/ListBlock';
import { TextBlock } from 'src/components/blocks/TextBlock';
import funnelExample from 'src/content/funnel.sample.json';
import { cn } from 'src/utils/cn';
import { ProgressBar } from 'src/components/common/ProgressBar';
import { FunnelType, PageType } from 'src/funnel.types';

export const FunnelPreview = () => {
  const [activePage, setActivePage] = useState(0);
  const [uploadedFunnel, setUploadedFunnel] = useState<FunnelType | undefined>();

  const funnel = uploadedFunnel ?? (funnelExample as FunnelType);
  const maxPageIndex = funnel.pages.length - 1;

  const onNavigateBackwards = useCallback(() => {
    // ensure we never go below 0
    setActivePage((currentIndex) => Math.max(0, currentIndex - 1));
  }, []);

  const onNavigateForward = useCallback(() => {
    setActivePage((currentIndex) => Math.min(maxPageIndex, currentIndex + 1));
  }, [maxPageIndex]);

  const currentPage = useMemo<PageType>(() => {
    return funnel.pages.at(activePage) ?? funnel.pages[0];
  }, [funnel, activePage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          onNavigateBackwards();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          onNavigateForward();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listener on unmount
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="mb-10 w-[375px]">
        <ChooseFunnelFile onLoadJson={setUploadedFunnel} />
      </div>

      <div className="flex items-center gap-4">
        <div>
          <button onClick={onNavigateBackwards}>
            <ChevronLeftIcon
              className={cn({
                'h-20 w-20 text-primary': true,
                'hover:text-blue-700': activePage > 0,
                'cursor-default text-gray-400': activePage === 0,
              })}
            />
          </button>
        </div>
        <div
          className={`relative flex h-[600px] w-[375px] flex-col overflow-hidden `}
          style={{ backgroundColor: funnel.bgColor }}
        >
          <div
            key={`page.${activePage}-${funnel.pages.length}`}
            className={`h-full w-full animate-page-appear overflow-hidden`}
          >
            <div className="flex h-full w-full flex-1 flex-col gap-6 overflow-y-auto p-4 ">
              {currentPage.blocks.map((block) => (
                <Fragment key={block.id}>
                  {block.type === 'text' && <TextBlock {...block} />}
                  {block.type === 'image' && <ImageBlock {...block} />}
                  {block.type === 'list' && <ListBlock {...block} />}
                  {block.type === 'button' && <ButtonBlock {...block} />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex-0 pt-2">
            <ProgressBar steps={funnel.pages.length} currentStep={activePage + 1} />
          </div>
        </div>
        <div>
          <button onClick={onNavigateForward}>
            <ChevronRightIcon
              className={cn({
                'h-20 w-20 text-primary': true,
                'hover:text-blue-700': activePage < maxPageIndex,
                'cursor-default text-gray-400': activePage >= maxPageIndex,
              })}
            />
          </button>
        </div>
      </div>
    </>
  );
};
