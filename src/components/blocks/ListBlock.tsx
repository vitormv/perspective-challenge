import { ListBLockType } from 'src/funnel.types';

type ListBlockProps = ListBLockType;

export const ListBlock = ({ items }: ListBlockProps) => (
  <ul className="flex flex-col gap-6">
    {items.map((item, i) => (
      /*
       * @todo should avoid using array index as key, best would be
       * to have actual ids for each list item, otherwise ensure they NEVER change order
       */
      <li key={i} className="flex w-full flex-col items-center gap-2 text-center">
        <img className="shrink-0" src={item.src} width="30" />

        <div className="text-lg font-bold">{item.title}</div>
        <div className="">{item.description}</div>
      </li>
    ))}
  </ul>
);
