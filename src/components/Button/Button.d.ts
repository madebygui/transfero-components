import { IconTypes } from '../../config/types/iconTypes';
import { TypographyTypes } from '../Typo/Typo';

export interface BaseButton {
  children?: string | ReactElement;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  icon?: IconTypes;
  iconsize?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  disabled?: boolean;
  theme?: 'dark' | 'light';
  link?: boolean;
  circle?: boolean;
  style?: React.CSSProperties | undefined;
  iconColor?: string;
  textColor?: string;
  className?: string;
}

export interface Icon extends BaseButton {
  icon: IconTypes;
}

export interface Children extends BaseButton {
  children: string | ReactElement;
}

export type ButtonTypes = Icon | Children;

export type TextSize = {
  sm: TypographyTypes['size'];
  md: TypographyTypes['size'];
  lg: TypographyTypes['size'];
  default: TypographyTypes['size'];
};
