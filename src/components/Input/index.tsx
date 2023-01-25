import { useEffect, useState, FC } from 'react';
import { Box, StyledEngineProvider, TextField, useTheme } from '@mui/material';
import theme from '../../config/theme';
import { ThemeProvider } from '@mui/material/styles';
import { InputProps } from './Input.types';
import { Typo } from '../Typo';
import { Icon } from '../Icon';
import { Button } from '../Button';
import '../../assets/css/Input.css';

const InputComponent: FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  multline,
  autoCapitalize = 'sentences',
  maskType,
  required,
  disabled,
  type,
  fullWidth,
  iconRight,
  title,
  error,
  password,
}) => {
  const { palette } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (value) {
      changeValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const changeValue = (v: string) => {
    let x: string | null | RegExpMatchArray = '';

    switch (maskType) {
      case 'phone':
        if (v.length > 14) {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

          if (x) {
            v = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
          }
        } else {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
          if (x) {
            v = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
          }
        }
        break;
      case 'cpf':
        x = v.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

        if (x) {
          v = !x[2]
            ? x[1]
            : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
        }

        break;
      case 'cpf_cnpj':
        if (v.length >= 15) {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);

          if (x) {
            v = !x[2]
              ? x[1]
              : x[1] +
                '.' +
                x[2] +
                (x[3] ? '.' + x[3] : '') +
                (x[4] ? '/' + x[4] : '') +
                (x[5] ? '-' + x[5] : '');
          }
        } else {
          x = v.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

          if (x) {
            v = !x[2]
              ? x[1]
              : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
          }
        }

        break;
      case 'zipCode':
        x = v.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '-' + x[2];
        }
        break;
      case 'date':
        x = v.replace(/\D/g, '').match(/(\d{0,4})(\d{0,2})(\d{0,2})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
        }
        break;
      case 'money':
        if (!isNaN(parseInt(v.replace(/[^0-9.]/g, '')))) {
          if (v.substring(v.length - 1) !== ',' && v.substring(v.length - 1) !== '.') {
            const decimals = v.split(',');
            const numberValue = parseFloat(v.replace(',', '.').replace(/[^0-9.]/g, ''));

            if (decimals[1]?.length > 0) {
              v = `$ ${numberValue
                .toFixed(decimals[1].length > 2 ? 2 : decimals[1].length)
                .toString()}`;
            } else {
              v = `$ ${numberValue.toString()}`;
            }
          }
        } else {
          v = '$ 0';
        }

        break;
      case 'cvv':
        x = v.replace(/\D/g, '').match(/(\d{0,4})/);
        if (x) {
          v = x[0];
        }
        break;
      case 'expiration_date':
        x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '/' + x[2];
        }
        break;
      case 'card':
        x = v.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

        if (x) {
          v = !x[2]
            ? x[1]
            : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
        }
        break;
      default:
        break;
    }

    onChangeText(v);
  };

  const configColor = () => {
    if (isFocused) {
      return palette.blue[500];
    }

    if (error !== '') {
      return palette.red[400];
    }

    return palette.blue[800];
  };

  const rightIcon = () => {
    if (error !== '') {
      return <Icon icon='alert' size={24} color={palette.red[400]} />;
    }

    if (password) {
      return (
        <Button
          icon={showPassword ? 'eye-open' : 'eye-shut'}
          iconColor={palette.gray[600]}
          onClick={() => setShowPassword(!showPassword)}
          link
          iconsize='md'
          style={{ margin: '0 !important', width: 'auto !important', height: 'auto !important' }}
        />
      );
    }

    return iconRight;
  };

  return (
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        variant='standard'
        value={value}
        onChange={(text) => changeValue(text.target.value)}
        fullWidth={fullWidth}
        autoCapitalize={autoCapitalize}
        multiline={multline}
        rows={6}
        className={error !== '' ? 'input-error' : undefined}
        type={password && !showPassword ? 'password' : type || 'text'}
        inputProps={{
          autoComplete: 'new-password',
        }}
        InputProps={{
          endAdornment: rightIcon(),
          style: { fontFamily: 'Montserrat' },
        }}
        helperText={error}
      />
    </Box>
  );
};

const Input: FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  multline,
  autoCapitalize = 'sentences',
  maskType,
  required,
  disabled,
  type,
  fullWidth,
  iconRight,
  title,
  error,
  password,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <InputComponent
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          multline={multline}
          autoCapitalize={autoCapitalize}
          maskType={maskType}
          required={required}
          disabled={disabled}
          type={type}
          fullWidth={fullWidth}
          iconRight={iconRight}
          title={title}
          error={error}
          password={password}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { Input };
