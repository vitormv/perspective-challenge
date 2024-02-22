'use client';

import { FunnelPreview } from 'src/components/FunnelPreview';
import { useParams } from 'next/navigation';
import sampleFunnel from 'src/content/funnel.sample.json';
import sheltieFunnel from 'src/content/funnel.sheltie.json';
import singlePageFunnel from 'src/content/funnel.singlePage.sample.json';
import { useMemo } from 'react';
import { FunnelType } from 'src/funnel.types';

export default function Preview() {
  const params = useParams();

  const funnel = useMemo(() => {
    switch (params.funnel) {
      case 'singlePage':
        return singlePageFunnel as FunnelType;
      case 'sheltie':
        return sheltieFunnel as FunnelType;
      default:
        return sampleFunnel as FunnelType;
    }
  }, []);

  return (
    <main className="flex h-full flex-1 flex-col items-center">
      <FunnelPreview funnel={funnel} />
    </main>
  );
}
