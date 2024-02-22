'use client';

import { FunnelPreview } from 'src/components/FunnelPreview';
import { useParams } from 'next/navigation';

const allowedFunnels = ['sample', 'singlePage'];

export default function Preview() {
  const params = useParams();

  return (
    <main className="flex h-full h-full flex-1 flex-col items-center">
      <FunnelPreview />
    </main>
  );
}
