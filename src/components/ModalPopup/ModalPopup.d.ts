import { ReactElement } from 'react';

export interface IModalPopup {
  title: string;
  text: string | ReactElement;
  onConfirm: () => void;
  onCancel: () => void;
  alert?: boolean;
}
