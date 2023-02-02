import { ReactElement } from 'react';

export interface TopBarProps {
  title: string | ReactElement;
  centerText?: string | null;
  width: string;
  toggleMenu?: () => void;
}
