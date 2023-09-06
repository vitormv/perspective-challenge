import { FunnelPreview } from 'src/components/FunnelPreview';

import funnel from 'src/content/funnel.example.json';
import { FunnelType } from 'src/types/funnel';

async function getData() {
  const data = funnel as FunnelType;

  return { funnel: data };
}

export default async function Home() {
  const { funnel } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FunnelPreview funnel={funnel} />
    </main>
  );
}
