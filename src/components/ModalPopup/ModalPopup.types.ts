import { ReactElement } from 'react';

export interface IModalPopup {
  title: string;
  text: string | ReactElement;
  onConfirm: () => void;
  onCancel: () => void;
  alert?: boolean;
  confirmText?: string;
  cancelText?: string;
  emphasisButton?: 'cancel' | 'confirm';
  disableOutsideClick?: boolean;
}
