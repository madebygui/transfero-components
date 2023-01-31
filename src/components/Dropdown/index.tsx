import React, { useState } from 'react';
import { Box, ButtonBase, Menu, MenuItem, StyledEngineProvider, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import thm from '../../config/theme';
import { DropdownTypes } from './Dropdown.types';
import { Typo } from '../Typo';
import { Icon } from '../Icon';

const DropdownComponent: React.FC<DropdownTypes> = ({
  children,
  size,
  outline,
  disabled,
  theme,
  style,
  className,
  items,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { palette } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      light: { backgroundColor: palette.blue[900] },
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
        borderColor: palette.blue[900],
        backgroundColor: 'transparent',
      },
      disabledOutline: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.gray[400],
        backgroundColor: 'transparent',
      },
      default: { backgroundColor: palette.blue[900] },
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
      outlineLight: palette.blue[900],
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

  const setIconSize = () => {
    const iconSizeMap = {
      sm: 16,
      md: 24,
      lg: 32,
      default: 16,
    };

    return iconSizeMap[size || 'default'];
  };

  return (
    <Box id='main-box' sx={{ position: 'relative' }}>
      <ButtonBase
        disabled={disabled}
        className={`btn ${buttonSize()} ${className}`}
        sx={{ ...color(), ...style }}
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <>
          {/* This Box it's a fake component to distribute items equaly, when have icon. */}
          <Box style={{ width: setIconSize() }} />
          <Typo
            size={size === 'sm' ? 'xxs' : 'xs'}
            fontWeight='700'
            color={textColorFn()}
            uppercase
            style={{ textAlign: 'center', letterSpacing: '1.8px' }}
          >
            {children}
          </Typo>
          <Icon
            icon={open ? 'chevron-up' : 'chevron-down'}
            size={setIconSize()}
            color={textColorFn()}
            style={{ position: 'relative' }}
          />
        </>
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((i, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              i?.onItemClick && i.onItemClick();
              handleClose();
            }}
          >
            {i.isLine && <Box sx={{ borderBottom: '1px solid #EEEEEE', width: '100%' }} />}
            {i.isTitle && (
              <Typo size='xxs' color={palette.gray[800]} fontWeight='600'>
                {i.label}
              </Typo>
            )}
            {i.label && !i.isTitle && (
              <Typo size='xs' color={palette.blue[900]} fontWeight='400'>
                {i.label}
              </Typo>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const Dropdown: React.FC<DropdownTypes> = ({
  children,
  size,
  outline,
  disabled,
  theme,
  style,
  className,
  items,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={thm}>
        <DropdownComponent
          size={size}
          outline={outline}
          disabled={disabled}
          theme={theme}
          style={style}
          className={className}
          items={items}
        >
          {children}
        </DropdownComponent>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export { Dropdown };
