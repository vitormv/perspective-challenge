import { ListBLockType } from 'src/funnel.types';

type Props = ListBLockType;

export const ListBlock = ({ items }: Props) => (
  <ul className="mb-6 flex flex-col gap-6">
    {items.map((item, i) => (
      /* @todo should avoid using array index as key, best would be
       * to have actual ids for each list item, otherwise ensure they NEVER change order */
      <li key={i} className="flex w-full flex-col items-center gap-2 text-center">
        <img className="shrink-0" src={item.src} width="30" alt={item.title} />

        <div className="text-lg font-bold">{item.title}</div>
        <div className="">{item.description}</div>
      </li>
    ))}
  </ul>
);
