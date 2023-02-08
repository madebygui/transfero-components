import React, { useState } from 'react';
import {
  Autocomplete as AutoInput,
  Box,
  TextField,
  StyledEngineProvider,
  useTheme,
} from '@mui/material';
import theme from '../../config/theme';
import { ThemeProvider } from '@mui/material/styles';
import { AutoCompleteProps } from './AutoComplete.types';
import { Typo } from '../Typo';

const AutoCompleteComponent: React.FC<AutoCompleteProps> = ({
  onChangeText,
  placeholder,
  value,
  items,
  title,
  style,
  disableClearable,
  onTextChange,
}) => {
  const { palette } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');

  const configColor = () => {
    if (isFocused) {
      return palette.blue[500];
    }

    return palette.blue[800];
  };

  return (
    <AutoInput
      disablePortal
      options={items}
      value={value}
      onChange={(_e, v) => onChangeText(v || '')}
      inputValue={search}
      sx={{ ...style }}
      disableClearable={disableClearable}
      onInputChange={(_event, v) => {
        setSearch(v);
      }}
      renderInput={(params) => (
        <Box>
          <Typo
            fontWeight='700'
            size='md'
            uppercase
            color={configColor()}
            style={{ letterSpacing: '0.15em' }}
          >
            {title}
          </Typo>
          <TextField
            {...params}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(v) => onTextChange && onTextChange(v)}
            placeholder={placeholder}
            variant='standard'
            fullWidth
            InputProps={{
              style: { fontFamily: 'Montserrat' },
              ...params.InputProps,
            }}
          />
        </Box>
      )}
    />
  );
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
  onChangeText,
  placeholder,
  value,
  items,
  title,
  style,
  disableClearable,
  onTextChange,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AutoCompleteComponent
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          items={items}
          title={title}
          style={style}
          disableClearable={disableClearable}
          onTextChange={onTextChange}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { AutoComplete };
