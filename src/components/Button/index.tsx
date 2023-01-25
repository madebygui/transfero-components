import React from 'react';
import { Box, ButtonBase, useTheme } from '@mui/material';
import { Typo } from '../Typo';
import { ButtonTypes, TextSize } from './Button.types';
import { Icon } from '../Icon';
import { TypographyTypes } from '../Typo/Typo.types';
import '../../assets/css/Button.css';

const Button: React.FC<ButtonTypes> = ({
  children,
  onClick,
  size,
  icon,
  iconsize,
  outline,
  disabled,
  theme,
  link,
  circle,
  style,
  iconColor,
  textColor,
  className,
}) => {
  const { palette } = useTheme();
  const buttonSize = () => {
    const sizes = {
      sm: 'btnSm',
      md: 'btnMd',
      lg: 'btnLg',
      default: 'btnMd',
    };

    return sizes[size || 'default'];
  };

  const color = () => {
    const colors = {
      dark: { backgroundColor: 'white' },
      light: { backgroundColor: palette.blue['900'] },
      disabled: { backgroundColor: palette.gray[200] },
      outlineDark: {
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
      },
      outlineLight: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.blue['900'],
        backgroundColor: 'transparent',
      },
      disabledOutline: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.gray[400],
        backgroundColor: 'transparent',
      },
      default: { backgroundColor: palette.blue['900'] },
    };

    if (disabled) {
      if (outline) {
        return colors['disabledOutline'];
      }

      return colors['disabled'];
    }

    if (outline) {
      if (theme === 'dark') {
        return colors['outlineDark'];
      }
      return colors['outlineLight'];
    }
    return colors[theme || 'default'];
  };

  const textColorFn = () => {
    const textColors = {
      dark: palette.gray[900],
      light: 'white',
      disabled: palette.gray[600],
      outlineDark: 'white',
      outlineLight: palette.blue['900'],
      disabledOutline: palette.gray[400],
      default: 'white',
    };

    if (disabled) {
      if (outline) {
        return textColors['disabledOutline'];
      }

      return textColors['disabled'];
    }

    if (outline) {
      if (theme === 'dark') {
        return textColors['outlineDark'];
      }
      return textColors['outlineLight'];
    }

    if (!theme) {
      return textColors['default'];
    }

    return textColors[theme];
  };

  const textColorLink = () => {
    const textColors = {
      dark: 'white',
      light: palette.blue[500],
      disabled: palette.gray[600],
      default: palette.blue[500],
    };

    if (disabled) {
      return textColors['disabled'];
    }

    return textColors[theme || 'default'];
  };

  const setIconSize = () => {
    const iconSizeMap = {
      sm: 16,
      md: 24,
      lg: 32,
      default: 16,
    };

    return iconSizeMap[iconsize || size || 'default'];
  };

  const linkTextSize = (): TypographyTypes['size'] => {
    const sizes: TextSize = {
      sm: 'xxs',
      md: 'xs',
      lg: 'md',
      default: 'xs',
    };

    return sizes[size || 'default'];
  };

  if (link) {
    return (
      <ButtonBase
        disabled={disabled}
        onClick={() => onClick()}
        sx={style}
        className={`link ${buttonSize()} ${className}`}
      >
        <Typo size={linkTextSize()} fontWeight='600' color={textColor || textColorLink()} uppercase>
          {children}
        </Typo>
        {icon && (
          <Icon
            icon={icon}
            size={setIconSize()}
            color={iconColor || textColorLink()}
            style={{ marginLeft: 5 }}
          />
        )}
      </ButtonBase>
    );
  }

  if (icon && !children) {
    if (circle) {
      return (
        <ButtonBase
          disabled={disabled}
          className={`btnIconCircle ${className}`}
          sx={style}
          onClick={() => onClick()}
        >
          <Icon
            icon={icon}
            size={24}
            color={outline ? palette.blue['900'] : textColorFn()}
            style={{ position: 'relative' }}
          />
          ;
        </ButtonBase>
      );
    }

    return (
      <ButtonBase
        disabled={disabled}
        className={`btnIcon ${className}`}
        sx={style}
        onClick={() => onClick()}
      >
        <Box sx={color()} className='square' />
        <Icon
          icon={icon}
          size={24}
          color={outline ? palette.blue['900'] : textColorFn()}
          style={{ position: 'relative' }}
        />
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      disabled={disabled}
      className={`btn ${buttonSize()} ${className}`}
      sx={{ ...color(), ...style }}
      onClick={() => onClick()}
    >
      <>
        {/* This Box it's a fake component to distribute items equaly, when have icon. */}
        {/* It needs to have a empty Box to center text. */}
        {icon ? <Box style={{ width: setIconSize() }} /> : <Box />}
        <Typo
          size={size === 'sm' ? 'xxs' : 'xs'}
          fontWeight='700'
          color={textColorFn()}
          uppercase
          style={{ textAlign: 'center', letterSpacing: '1.8px' }}
        >
          {children}
        </Typo>
        {/* It needs to have a empty Box to center text. */}
        {icon ? (
          <Icon
            icon={icon}
            size={setIconSize()}
            color={textColorFn()}
            style={{ position: 'relative' }}
          />
        ) : (
          <Box />
        )}
      </>
    </ButtonBase>
  );
};

export { Button };
