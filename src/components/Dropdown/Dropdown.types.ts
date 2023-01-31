import { ReactElement } from 'react';

interface Items {
  onItemClick?: () => void;
  label?: string;
  isTitle?: boolean;
  isLine?: boolean;
}

export interface BaseButton {
  children?: string | ReactElement;
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  disabled?: boolean;
  theme?: 'dark' | 'light';
  style?: React.CSSProperties | undefined;
  className?: string;
  items: Items[];
}

export interface Children extends BaseButton {
  children: string | ReactElement | undefined;
}

export type DropdownTypes = Children;
