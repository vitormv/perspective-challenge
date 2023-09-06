export type FunnelType = {
  name: string;
  bgColor: string;
  pages: PageType[];
};

export type PageType = {
  id: string;
  blocks: Array<TextBlockType | ImageBlockType | ListBLockType | ButtonBlockType>;
};

export type BlockType = {
  id: string;
};

export type TextBlockType = BlockType & {
  type: 'text';
  text: string;
  color: string;
  align: string;
};

export type ImageBlockType = BlockType & {
  type: 'image';
  src: string;
};

export type ButtonBlockType = BlockType & {
  type: 'button';
  text: string;
  color: string;
  bgColor: string;
};

export type ListItemType = {
  title: string;
  description: string;
  src: string;
};

export type ListBLockType = BlockType & {
  type: 'list';
  items: ListItemType[];
};
