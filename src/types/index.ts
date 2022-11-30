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

export type NotifyDialogProps = {
  open: boolean;
  contentText: string;
  type?: 'WARNING' | 'SUCCESS';
  confirmText?: string;
  handleConfirm?: () => void;
  cancelText: string;
  handleCancel: () => void;
};

export type LabelsProps = {
  labels: string[];
  type?: string;
};

export type UserActionsProps = {
  thumbCount: number;
  onLike: () => void;
  onComment: () => void;
};
