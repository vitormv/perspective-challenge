import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ButtonBlock } from 'src/components/blocks/ButtonBlock';
import { ImageBlock } from 'src/components/blocks/ImageBlock';
import { ListBlock } from 'src/components/blocks/ListBlock';
import { TextBlock } from 'src/components/blocks/TextBlock';
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
      <div className="flex gap-4 items-center">
        <div>
          <ChevronLeftIcon className="h-20 w-20 text-blue-500" />
        </div>
        <div className={`w-[375px] h-[600px]`} style={{ backgroundColor: funnel.bgColor }}>
          {funnel.pages.map((page) => (
            <div key={page.id}>
              {page.blocks.map((block) => (
                <>
                  {block.type === 'text' && <TextBlock {...block} />}
                  {block.type === 'image' && <ImageBlock {...block} />}
                  {block.type === 'list' && <ListBlock {...block} />}
                  {block.type === 'button' && <ButtonBlock {...block} />}
                </>
              ))}
            </div>
          ))}
        </div>
        <div>
          <ChevronRightIcon className="h-20 w-20 text-blue-500" />
        </div>
      </div>
    </main>
  );
}
