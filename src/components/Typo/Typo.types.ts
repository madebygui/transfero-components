import { Theme } from '@emotion/react';
import { SxProps, TypographyProps } from '@mui/material';
import React from 'react';

export interface TypographyTypes {
  children: string | React.ReactNode;
  style?: SxProps<Theme> | undefined;
  color?: TypographyProps['color'] | undefined;
  fontWeight?: '200' | '300' | '400' | '500' | '600' | '700';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  uppercase?: boolean;
  italic?: boolean;
  numberOfLines?: number;
  className?: string;
}
