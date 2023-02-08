import { FC } from 'react';
import { Box, useTheme, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../config/theme';
import { globalStyles } from '../../config/theme/globalStyles';
import { Button } from '../Button';
import { Typo } from '../Typo';
import { IModalPopup } from './ModalPopup.types';
import '../../assets/css/Popup.css';

const ModalPopupComponent: FC<IModalPopup> = ({
  title,
  text,
  onCancel,
  onConfirm,
  alert,
  cancelText,
  confirmText,
  emphasisButton = 'cancel',
  disableOutsideClick,
}) => {
  const { palette } = useTheme();

  return (
    <Box className='overlay' onClick={() => !disableOutsideClick && onCancel()}>
      <Box className='popup' onClick={(e) => e.stopPropagation()}>
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
              {confirmText || 'OK'}
            </Button>
          </Box>
        ) : (
          <Box className='flex-row justify-center'>
            <Button
              outline={emphasisButton === 'confirm'}
              onClick={() => onCancel()}
              style={globalStyles.m1}
            >
              {cancelText || 'No'}
            </Button>
            <Button
              outline={emphasisButton === 'cancel'}
              onClick={() => onConfirm()}
              style={globalStyles.m1}
            >
              {confirmText || 'Yes'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const ModalPopup: React.FC<IModalPopup> = ({
  title,
  text,
  onCancel,
  onConfirm,
  alert,
  confirmText,
  cancelText,
  emphasisButton,
  disableOutsideClick,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ModalPopupComponent
          title={title}
          text={text}
          onCancel={onCancel}
          onConfirm={onConfirm}
          alert={alert}
          confirmText={confirmText}
          cancelText={cancelText}
          emphasisButton={emphasisButton}
          disableOutsideClick={disableOutsideClick}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { ModalPopup };
