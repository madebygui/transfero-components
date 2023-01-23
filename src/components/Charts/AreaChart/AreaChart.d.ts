// import { IPerformanceChart, PeriodsChart } from '@src/models/performance';

import { DateTime } from 'luxon';
import { PeriodsChart } from '../../../config/types/periods';

export interface IAreaChart {
  periodActive: PeriodsChart;
  data:
    | {
        assetValue: number;
        date: string;
      }[]
    | undefined;
  changeActivePoint: (number) => void;
  initialDate: DateTime;
  endDate: DateTime;
  theme?: 'dark' | 'light';
}

export interface IAreaChartData {
  x: number;
  y: number;
}

export interface NavigatorComponentProps {
  containerWidth: number;
  containerPosition: {
    left: number;
    right: number;
  };
  tickCount: number;
  changeValue: (n: number) => void;
  theme: 'dark' | 'light';
}
