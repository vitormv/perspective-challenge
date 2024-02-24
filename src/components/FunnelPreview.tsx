'use client';

import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { ButtonBlock } from 'src/components/blocks/ButtonBlock';
import { ImageBlock } from 'src/components/blocks/ImageBlock';
import { ListBlock } from 'src/components/blocks/ListBlock';
import { TextBlock } from 'src/components/blocks/TextBlock';
import { ProgressBar } from 'src/components/common/ProgressBar';
import { FunnelType, PageType } from 'src/funnel.types';
import { useHorizontalSwipe } from 'src/hooks/useHorizontalSwipe';

type Props = {
  funnel: FunnelType;
};

export const FunnelPreview = ({ funnel }: Props) => {
  const [activePage, setActivePage] = useState(0);

  const maxPageIndex = funnel.pages.length - 1;

  const onNavigateBackwards = useCallback(() => {
    // ensure we never go below 0
    setActivePage((currentIndex) => Math.max(0, currentIndex - 1));
  }, []);

  const onNavigateForward = useCallback(() => {
    setActivePage((currentIndex) => Math.min(maxPageIndex, currentIndex + 1));
  }, [maxPageIndex]);

  const swipeHandler = useHorizontalSwipe({
    onSwipedLeft: onNavigateForward,
    onSwipedRight: onNavigateBackwards,
  });

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
  }, [onNavigateBackwards, onNavigateForward]);

  return (
    <div
      className="box-sizing flex h-full w-full flex-1 flex-col items-center gap-4 pb-10"
      style={{ backgroundColor: funnel.bgColor }}
      onTouchStart={swipeHandler.onTouchStart}
      onTouchEnd={swipeHandler.onTouchEnd}
      onTouchMove={swipeHandler.onTouchMove}
    >
      <div
        className={`relative flex w-full max-w-full flex-1 flex-col overflow-hidden md:max-w-xl`}
      >
        <div
          key={`page.${activePage}-${funnel.pages.length}`}
          className={`h-full w-full flex-1 animate-page-appear overflow-hidden`}
        >
          <div className="flex h-full w-full flex-1 flex-col gap-6 overflow-y-auto p-4 md:my-10">
            {currentPage.blocks.map((block, i) => (
              <Fragment key={block.id}>
                {block.type === 'text' && <TextBlock {...block} hasAppearAnimation={i === 0} />}
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
