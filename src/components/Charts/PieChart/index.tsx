import { Box } from '@mui/material';
import { VictoryPie } from 'victory';
import Label from './Label';
import { IContent } from './PieChart';

interface Props {
  items: IContent[];
  theme?: 'dark' | 'light';
}

const PieChart: React.FC<Props> = (prop) => {
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

export { PieChart };
