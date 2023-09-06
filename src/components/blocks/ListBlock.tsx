import type { ListBLockType } from 'src/types/funnel';

type ListBlockProps = ListBLockType;

export const ListBlock = ({ items }: ListBlockProps) => (
  <ul>
    {items.map((item, i) => (
      /*
       * @todo should avoid using array index as key, best would be
       * to have actual ids for each list item, otherwise ensure they NEVER change order
       */
      <li key={i}>
        {item.title}
        {item.description}

        <img src={item.src} width="100px" />
      </li>
    ))}
  </ul>
);
