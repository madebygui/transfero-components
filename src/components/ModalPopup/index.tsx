import { FC } from 'react';
import { Box, useTheme, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../config/theme';
import { globalStyles } from '../../config/theme/globalStyles';
import { Button } from '../Button';
import { Typo } from '../Typo';
import { IModalPopup } from './ModalPopup.types';
import '../../assets/css/Popup.css';

const ModalPopupComponent: FC<IModalPopup> = ({ title, text, onCancel, onConfirm, alert }) => {
  const { palette } = useTheme();

  return (
    <Box className='overlay' onClick={() => onCancel()}>
      <Box className='popup'>
        <Typo fontWeight={'300'} size='lg' color={palette.blue[900]} style={globalStyles.mb4}>
          {title}
        </Typo>
        {typeof text === 'string' ? (
          <Typo fontWeight='400' size='md' color={palette.gray[700]} style={globalStyles.mb4}>
            {text}
          </Typo>
        ) : (
          text
        )}

        {alert ? (
          <Box className='flex-row justify-center'>
            <Button onClick={() => onConfirm()} style={globalStyles.m1}>
              OK
            </Button>
          </Box>
        ) : (
          <Box className='flex-row justify-center'>
            <Button onClick={() => onCancel()} style={globalStyles.m1}>
              No
            </Button>
            <Button outline onClick={() => onConfirm()} style={globalStyles.m1}>
              Yes
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const ModalPopup: React.FC<IModalPopup> = ({ title, text, onCancel, onConfirm, alert }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ModalPopupComponent
          title={title}
          text={text}
          onCancel={onCancel}
          onConfirm={onConfirm}
          alert={alert}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { ModalPopup };
