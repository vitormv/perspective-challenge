import { LinkListItem } from 'src/components/common/LinkListItem';
import { funnels } from 'src/content/funnels';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-10 p-10">
      <div className="text-center">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
          Try it out &nbsp;🙌
        </h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Select a funnel from the list below, or upload your own JSON file to get started.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {Object.entries(funnels).map(([key, funnel], i) => (
          <LinkListItem
            key={funnel.name}
            label={`${i + 1}. ${funnel.name}`}
            href={`/preview/${key}`}
          />
        ))}

        <LinkListItem
          label={`${Object.keys(funnels).length + 1}. Upload my own`}
          href="/preview/custom"
        />
      </div>
    </main>
  );
}
