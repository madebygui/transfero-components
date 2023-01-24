import { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import { globalStyles } from '../../config/theme/globalStyles';
import { Button } from '../Button';
import { Typo } from '../Typo';
import { IModalPopup } from './ModalPopup.types';

const ModalPopup: FC<IModalPopup> = ({ title, text, onCancel, onConfirm, alert }) => {
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

export { ModalPopup };
