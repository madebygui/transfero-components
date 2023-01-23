import { useTheme } from '@mui/system';
import React, { useMemo } from 'react';
import { getAverage, getXOffset, getYOffset } from '../calculations';
import LabelLine from '../LabelLine';

interface Props {
  radius: number;
  cx: number;
  cy: number;
  theme?: 'dark' | 'light';
}

const Label: React.FC<Props> = ({ radius, cx, cy, theme, ...rest }) => {
  const { palette } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const restProps: any = rest;
  const { slice, datum, data } = restProps;

  const offSetMiddle = 1.15 * radius;
  const middleAngle = getAverage([slice.startAngle, slice.endAngle]);

  const tempX = cx + getXOffset(offSetMiddle, middleAngle);
  const tempY = cy + getYOffset(offSetMiddle, middleAngle);

  const [x, y] = useMemo(() => {
    if (datum.endAngle - datum.startAngle < 20) {
      const descendingOrderPosition = data.length - 1 - slice.index;
      const cappedOrderPosition = descendingOrderPosition <= 3 ? descendingOrderPosition : 3;

      const aditionalXAxisOffset = 20 + 22.5 * cappedOrderPosition;
      const x =
        cx < tempX ? tempX + (aditionalXAxisOffset - 25) : tempX - (aditionalXAxisOffset + 0);

      const aditionalYAxisOffset = 8 * descendingOrderPosition;
      const y =
        cy < tempY ? tempY - (aditionalYAxisOffset - 25) : tempY + (aditionalYAxisOffset - 10);

      return [x, y];
    } else {
      const x = cx < tempX ? tempX + 45 : tempX - 45;
      const y = tempY;

      return [x, y];
    }
  }, [datum.startAngle, datum.endAngle, data.length, slice.index, cx, cy, tempX, tempY]);

  const labelTextAnchor = cx < x ? 'middle' : 'start';

  return (
    <svg>
      <g>
        <text
          x={x}
          y={y}
          fill={theme === 'light' ? palette.gray[800] : palette.gray[100]}
          fontSize='16'
          fontFamily='Montserrat'
          textAnchor={labelTextAnchor}
        >
          {`${datum?._y ?? 0}%`}
        </text>
        <LabelLine
          data={data}
          slice={slice}
          datum={datum}
          cx={cx}
          cy={cy}
          xValue={x}
          xOffSetMiddle={offSetMiddle}
          yOffSetMiddle={offSetMiddle}
          middleAngle={middleAngle}
          chartEdge={radius}
          theme={theme}
        />
      </g>
    </svg>
  );
};

export default Label;
