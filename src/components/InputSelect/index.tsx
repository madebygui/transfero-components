import React, { useState } from 'react';
import { Box, SelectChangeEvent, useTheme } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Typo } from '../Typo';
import { InputSelectProps } from './InputSelect';

const InputSelect: React.FC<InputSelectProps> = ({
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

export default InputSelect;
