export type Funnel = {
  name: string;
  bgColor: string;
  pages: Page[];
};

export type Page = {
  id: string;
  blocks: Block[];
};

export type Block = {
  id: string;
};

export type TextBlock = Block & {
  type: 'text';
  text: string;
  color: string;
  align: 'center' | 'left' | 'right';
};

export type ImageBlock = Block & {
  type: 'text';
  text: string;
  color: string;
  align: 'center' | 'left' | 'right';
};

export type ButtonBlock = Block & {
  type: 'button';
  text: string;
  color: string;
  bgColor: string;
};

export type ListBLock = Block & {
  type: 'list';
  items: [
    {
      title: 'Drinks';
      description: 'Tshhh... Ahhhhh!';
      src: 'https://img.icons8.com/0076FF/win10/247/kawaii-soda';
    },
    {
      title: 'Icecream';
      description: 'Cool down ...';
      src: 'https://img.icons8.com/0076FF/win10/247/kawaii-cupcake';
    },
    {
      title: 'Taccos';
      description: '... to heat up';
      src: 'https://img.icons8.com/0076FF/win10/247/kawaii-taco';
    },
  ];
};

export type Item = {
  title: string;
  description: string;
  src: string;
};
