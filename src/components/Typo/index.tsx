import React from 'react';
import { TypographyTypes } from './Typo.types';
import { Typography } from '@mui/material';

const Typo: React.FC<TypographyTypes> = ({
  children,
  style,
  color,
  fontWeight,
  size,
  uppercase,
  className,
}) => {
  const calculateSize = () => {
    const sizes = {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 24,
      xl: 32,
      '2xl': 40,
      default: 16,
    };

    const lineHeight = {
      xxs: 16.5,
      xs: 20,
      sm: 21,
      md: 24,
      lg: 32,
      xl: 40,
      '2xl': 48,
      default: 24,
    };

    return { fontSize: sizes[size || 'default'], lineHeight: lineHeight[size || 'default'] };
  };

  return (
    <Typography
      fontWeight={fontWeight}
      fontFamily='Montserrat'
      lineHeight={calculateSize().lineHeight + 'px'}
      fontSize={calculateSize().fontSize + 'px'}
      textTransform={uppercase ? 'uppercase' : 'none'}
      color={color}
      sx={style}
      className={className}
    >
      {children}
    </Typography>
  );
};

export { Typo };
