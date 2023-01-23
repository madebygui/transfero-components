/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';

import { getXOffset, getYOffset } from '../calculations';

interface Props {
  data: any[];
  slice: any;
  datum: any;
  cx: number;
  cy: number;
  middleAngle: number;
  xOffSetMiddle: number;
  yOffSetMiddle: number;
  chartEdge: number;
  xValue: any;
  theme?: 'dark' | 'light';
}

const LabelLine: React.FC<Props> = ({
  data,
  slice,
  datum,
  cx,
  cy,
  middleAngle,
  xOffSetMiddle,
  yOffSetMiddle,
  chartEdge,
  xValue,
  theme,
}) => {
  const xStart = cx + getXOffset(chartEdge, middleAngle);
  const yStart = cy + getYOffset(chartEdge, middleAngle);
  const xMiddleTemp = cx + getXOffset(xOffSetMiddle, middleAngle);
  const yMiddleTemp = cy + getYOffset(yOffSetMiddle, middleAngle);
  const { palette } = useTheme();

  const [xMiddle, yMiddle] = useMemo(() => {
    if (datum.endAngle - datum.startAngle < 20) {
      const descendingOrderPosition = data.length - 1 - slice.index;

      const aditionalXAxisOffset = 15 * descendingOrderPosition;
      const x =
        cx < xMiddleTemp
          ? xMiddleTemp + (aditionalXAxisOffset - 20)
          : xMiddleTemp - aditionalXAxisOffset;

      const aditionalYAxisOffset = 8 * descendingOrderPosition;
      const y =
        cy < yMiddleTemp
          ? yMiddleTemp - (aditionalYAxisOffset - 30)
          : yMiddleTemp + (aditionalYAxisOffset - 7);

      return [x, y];
    } else {
      const x = xMiddleTemp + 3;
      const y = yMiddleTemp + 3;

      return [x, y];
    }
  }, [
    datum.startAngle,
    datum.endAngle,
    data.length,
    slice.index,
    cx,
    cy,
    xMiddleTemp,
    yMiddleTemp,
  ]);

  return (
    <polyline
      opacity='1'
      fill='none'
      stroke={theme === 'light' ? palette.gray[600] : palette.gray[100]}
      strokeWidth='1px'
      points={`${xStart},${yStart} ${xMiddle},${yMiddle} ${xValue},${yMiddle}`}
    />
  );
};

export default LabelLine;
