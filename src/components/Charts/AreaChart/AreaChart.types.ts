/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from 'luxon';
import { PeriodsChart } from '../../../config/types/periods.types';

export interface IAreaChart {
  periodActive: PeriodsChart;
  data:
    | {
        assetValue: number;
        date: string;
      }[]
    | undefined;
  changeActivePoint: (number: any) => void;
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
