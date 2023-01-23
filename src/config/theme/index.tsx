import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
    green: Palette['primary'];
    purple: Palette['primary'];
    pink: Palette['primary'];
    orange: Palette['primary'];
    red: Palette['primary'];
    gray: Palette['primary'];
  }
  interface PaletteOptions {
    blue?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    red?: PaletteOptions['primary'];
    gray?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    900?: string;
    800?: string;
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
  }

  interface SimplePaletteColorOptions {
    900?: string;
    800?: string;
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
  }
}

export const dataVisColors = [
  '#00DDB5',
  '#DD77FF',
  '#FF9955',
  '#9898FF',
  '#FF6666',
  '#FFF066',
  '#F77CCE',
  '#227D6C',
  '#8D33C9',
  '#FFD453',
  '#0AADDA',
];

const theme = createTheme({
  palette: {
    mode: 'light',
    blue: {
      900: '#1A0E38',
      800: '#22224C',
      500: '#2D2DB2',
      400: '#3F3FF9',
      300: '#44ACFF',
    },
    green: {
      500: '#00BB99',
      400: '#00DDB5',
    },
    purple: {
      700: '#3E2277',
      600: '#6033BB',
      500: '#7733EE',
      400: '#BB88FF',
      200: '#EEDDFF',
    },
    pink: {
      400: '#CC66CC',
    },
    orange: {
      500: '#FF9955',
      400: '#FFC388',
    },
    red: {
      400: '#E55250',
    },
    gray: {
      900: '#110022',
      800: '#555566',
      700: '#766E88',
      600: '#8C869C',
      500: '#A39FAF',
      400: '#BAB7C3',
      300: '#D1CFD7',
      200: '#E8E7EB',
      100: '#F4F3F5',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '165%',
          color: '#E55250',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&::after': {
            borderBottomColor: '#2D2DB2 !important',
          },
          '&::before': {
            borderBottomColor: '#A39FAF !important',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '155%',
            letterSpacing: '0.1em',
            color: '#766E88',
          },
        },
      },
    },
  },
});

export default theme;
