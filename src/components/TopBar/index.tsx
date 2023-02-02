/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AppBar, Box, Toolbar, useTheme, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../config/theme';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Button } from '../Button';
import { Typo } from '../Typo';
import { TopBarProps } from './TopBar.types';

const TopBarComponent: React.FC<TopBarProps> = ({ title, centerText, width, toggleMenu }) => {
  const { palette } = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <AppBar
      position='fixed'
      sx={{
        width,
        height: '100px',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        boxShadow: 'unset',
      }}
    >
      <Toolbar className='space-between' sx={{ backgroundColor: palette.blue[800] }}>
        <Box className='flex-row align-center' sx={{ width: '30%' }}>
          {dimensions.width < 500 && (
            <Button
              icon='menu'
              iconColor={palette.gray[100]}
              onClick={() => toggleMenu && toggleMenu()}
              link
              iconsize='md'
              style={{
                margin: '0 !important',
                width: 'auto !important',
                height: 'auto !important',
              }}
            />
          )}

          {typeof title === 'string' ? (
            <Typo size='md' color='white' fontWeight='500'>
              {title}
            </Typo>
          ) : (
            title
          )}
        </Box>

        {centerText && (
          <Typo
            size='md'
            color='white'
            fontWeight='300'
            style={{ width: '30%', textAlign: 'center' }}
          >
            {centerText}
          </Typo>
        )}

        {dimensions.width >= 500 && <Box style={{ width: '30%' }} />}
      </Toolbar>
    </AppBar>
  );
};

const TopBar: React.FC<TopBarProps> = ({ title, centerText, width, toggleMenu }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <TopBarComponent
          title={title}
          centerText={centerText}
          width={width}
          toggleMenu={toggleMenu}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { TopBar };
