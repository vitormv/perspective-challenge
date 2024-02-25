'use client';

import { LinkListItem } from 'src/components/common/LinkListItem';
import { funnels } from 'src/content/funnels';
import { useCallback, useState } from 'react';
import { FunnelType } from 'src/funnel.types';
import { FunnelPreview } from 'src/components/FunnelPreview';
import { cn } from 'src/utils/cn';
import { Navbar } from 'src/components/layout/Navbar';
import { UploadDropzone } from 'src/components/UploadDropzone';
import { preloadImages } from 'src/utils/preloadImages';
import { isTestEnv } from 'src/utils/isTestEnv';

export default function Home() {
  const [funnel, setFunnel] = useState<FunnelType>();

  const onSelectFunnel = useCallback(async (uploadedFunnel: FunnelType) => {
    if (!isTestEnv) {
      const allImageUrls = uploadedFunnel.pages.flatMap((page) => {
        return page.blocks.flatMap((block) => (block.type === 'image' ? block.src : []));
      });

      // before navigating to the Funnel, ensure all images are preloaded, to prevent
      // massive layout shifts which can also disrupt the user's experience and transitions
      await preloadImages(allImageUrls).catch((error) => {
        console.error('Error preloading images', error);
      });
    }

    setFunnel(uploadedFunnel);
  }, []);

  return (
    <>
      <Navbar onSelectFunnel={onSelectFunnel} />

      <main
        className={cn({
          'flex h-full flex-1 flex-col items-center': true,
          'gap-10 p-10': !funnel,
        })}
      >
        {funnel && <FunnelPreview funnel={funnel} />}

        {!funnel && (
          <div className="flex max-w-lg flex-col gap-10">
            <div className="text-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                Try it out &nbsp;🙌
              </h1>
              <p className="mt-3 text-lg leading-8 text-gray-600">
                Select a funnel from the list below, or upload your own JSON file to get started.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {Object.entries(funnels).map(([, funnel], i) => (
                <LinkListItem
                  key={funnel.name}
                  label={`${i + 1}. ${funnel.name}`}
                  onClick={() => onSelectFunnel(funnel)}
                />
              ))}
            </div>

            <UploadDropzone onUploadSuccess={onSelectFunnel} />
          </div>
        )}
      </main>
    </>
  );
}
