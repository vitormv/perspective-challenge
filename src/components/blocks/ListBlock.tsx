import type { ListBLockType } from 'src/types/funnel';

type ListBlockProps = ListBLockType;

export const ListBlock = ({ items }: ListBlockProps) => (
  <ul className="flex flex-wrap">
    {items.map((item, i) => (
      /*
       * @todo should avoid using array index as key, best would be
       * to have actual ids for each list item, otherwise ensure they NEVER change order
       */
      <li key={i} className="flex flex-col items-center justify-center basis-1/2 flex-wrap mb-4">
        <img className="shrink-0 pb-4" src={item.src} width="40" />

        <span>{item.title}</span>
        <span>{item.description}</span>
      </li>
    ))}
  </ul>
);
