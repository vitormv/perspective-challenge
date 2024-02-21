import type { ListBLockType } from 'src/types/funnel';

type ListBlockProps = ListBLockType;

export const ListBlock = ({ items }: ListBlockProps) => (
  <ul className="flex flex-col gap-6">
    {items.map((item, i) => (
      /*
       * @todo should avoid using array index as key, best would be
       * to have actual ids for each list item, otherwise ensure they NEVER change order
       */
      <li key={i} className="flex flex-col items-center gap-2 w-full">
        <img className="shrink-0" src={item.src} width="30" />

        <div className="text-lg font-bold">{item.title}</div>
        <div className="">{item.description}</div>
      </li>
    ))}
  </ul>
);
