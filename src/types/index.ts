export type ListItem = {
  label: string;
  value: string | number;
};

export type FilterProps = {
  label: string;
  name: string;
  items?: ListItem[];
};
