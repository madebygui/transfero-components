import { Box, StyledEngineProvider } from '@mui/material';
import { VictoryPie } from 'victory';
import { ThemeProvider } from '@mui/material/styles';
import thm from '../../../config/theme';
import Label from './Label';
import { IContent } from './PieChart.types';

interface Props {
  items: IContent[];
  theme?: 'dark' | 'light';
}

const PieChartComponent: React.FC<Props> = (prop) => {
  const radius = 140;
  const innerRadius = 80;

  return (
    <Box style={{ maxWidth: 600, width: '100%' }}>
      <VictoryPie
        style={{ data: { fill: ({ datum }) => datum.iconColor } }}
        data={prop.items}
        x='title'
        y='percentage'
        radius={radius}
        innerRadius={innerRadius}
        width={455}
        labels={({ datum }) => `${datum?._y ?? 0}%`}
        labelComponent={<Label radius={radius} cx={227} cy={200} theme={prop?.theme} />}
      />
    </Box>
  );
};

const PieChart: React.FC<Props> = ({ items, theme }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={thm}>
        <PieChartComponent items={items} theme={theme} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { PieChart };
