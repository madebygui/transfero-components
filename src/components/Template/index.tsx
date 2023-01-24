import { Box } from '@mui/system';
import React from 'react';
import { TemplateProps } from './Template.types';

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: `calc(100%)`,
        minHeight: '100vh',
        height: '100%',
        flex: 1,
        background: '#EEEEEE',
      }}
    >
      {children}
    </Box>
  );
};

export { Template };
