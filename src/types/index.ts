export type ListItem = {
  label: string;
  value: string | number;
};

export type FilterAction = {
  [props: string]: number | number[];
};

export type FilterProps = {
  label: string;
  name: string;
  items?: ListItem[];
};

export type FilterActionType = 'ADD' | 'DELETE' | 'CLEAR';
