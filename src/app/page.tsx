'use client';

import { ChooseFunnelFile } from 'src/components/ChooseFunnelFile';
import { LinkListItem } from 'src/components/common/LinkListItem';
import { funnels } from 'src/content/funnels';
import { useCallback, useState } from 'react';
import { FunnelType } from 'src/funnel.types';
import { FunnelPreview } from 'src/components/FunnelPreview';
import { cn } from 'src/utils/cn';
import { Navbar } from 'src/components/layout/Navbar';

export default function Home() {
  const [funnel, setFunnel] = useState<FunnelType>();

  const onSelectFunnel = useCallback((uploadedFunnel: FunnelType) => {
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
          <>
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
                  onClick={() => setFunnel(funnel)}
                />
              ))}
            </div>

            <ChooseFunnelFile onUploadSuccess={onSelectFunnel} />
          </>
        )}
      </main>
    </>
  );
}
