import React, { useState } from 'react';
import { Box, SelectChangeEvent, useTheme, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../config/theme';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Typo } from '../Typo';
import { InputSelectProps } from './InputSelect.types';
import '../../assets/css/InputSelect.css';

const InputSelectComponent: React.FC<InputSelectProps> = ({
  onChangeText,
  value,
  placeholder,
  items = [],
  required,
  error,
  width,
}) => {
  const { palette } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const configColor = () => {
    if (isFocused) {
      return palette.blue[500];
    }

    if (error !== '') {
      return palette.red[400];
    }

    return palette.blue[800];
  };

  return (
    <Box sx={width ? { width } : undefined}>
      <Typo
        fontWeight='700'
        size='md'
        uppercase
        color={configColor()}
        style={{ letterSpacing: '0.15em' }}
      >
        {placeholder}
        {required && '*'}
      </Typo>

      <FormControl className='select-root'>
        <Select
          variant='standard'
          value={value}
          onChange={(event: SelectChangeEvent<string>) => {
            onChangeText(event.target.value as string);
          }}
          autoWidth
          fullWidth
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{ fontFamily: 'Montserrat' }}
        >
          {items.map((item, index) => (
            <MenuItem key={index.toString()} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const InputSelect: React.FC<InputSelectProps> = ({
  onChangeText,
  value,
  placeholder,
  items = [],
  required,
  error,
  width,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <InputSelectComponent
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          items={items}
          required={required}
          error={error}
          width={width}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { InputSelect };
