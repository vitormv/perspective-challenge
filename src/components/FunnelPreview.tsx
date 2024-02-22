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
    <div
      className="flex h-full w-full flex-1 flex-col items-center gap-4"
      style={{ backgroundColor: funnel.bgColor }}
    >
      <div
        className={`relative flex w-full max-w-full flex-1 flex-col overflow-hidden md:max-w-xl`}
      >
        <div
          key={`page.${activePage}-${funnel.pages.length}`}
          className={`h-full w-full flex-1 animate-page-appear overflow-hidden`}
        >
          <div className="flex h-full w-full flex-1 flex-col gap-6 overflow-y-auto p-4 ">
            {currentPage.blocks.map((block, i) => (
              <Fragment key={block.id}>
                {block.type === 'text' && <TextBlock {...block} isFirst={i === 0} />}
                {block.type === 'image' && <ImageBlock {...block} />}
                {block.type === 'list' && <ListBlock {...block} />}
                {block.type === 'button' && <ButtonBlock {...block} />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-0 fixed bottom-0 w-full pt-2">
        <ProgressBar steps={funnel.pages.length} currentStep={activePage + 1} />
      </div>
    </div>
  );
};
