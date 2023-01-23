/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryCursorContainer,
  VictoryGroup,
  VictoryScatter,
} from 'victory';
import { useTheme } from '@mui/system';
import { IAreaChart, IAreaChartData } from './AreaChart';
import { NavigatorComponent } from './NavigatorComponent';
import { DateTime } from 'luxon';
import { Typo } from '../../Typo';
import { Box } from '@mui/material';

const AreaChart: React.FC<IAreaChart> = React.memo(
  ({ periodActive, data, changeActivePoint, initialDate, endDate, theme }) => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [containerPosition, setContainerPosition] = useState({
      left: 0,
      right: 0,
    });
    const [areaData, setAreaData] = useState<IAreaChartData[]>([]);
    const [tickCount, setTickCount] = useState(6);
    const [maxValue, setMaxValue] = useState(1);
    const [minValue, setMinValue] = useState(0);
    const [firstDate, setFirstDate] = useState(initialDate);
    const { palette } = useTheme();

    const chartStyle = {
      area: {
        data: {
          strokeWidth: 2,
        },
      },
      axisHorizontal: {
        axis: { display: 'none' },
        grid: {
          stroke: ({ tick }: any) =>
            tick === 0 ? (theme === 'dark' ? palette.gray[100] : palette.gray[400]) : '#aaaaaa42',
          strokeWidth: 1,
        },
      },
      axisVertical: {
        axis: {
          stroke: theme === 'dark' ? palette.gray[100] : palette.gray[400],
        },
        grid: {
          display: 'none',
        },
      },
    };

    const containerRef = useCallback((node: null | HTMLHeadingElement) => {
      if (node !== null) {
        setContainerWidth(node.offsetWidth);
        setContainerPosition({
          left: node.getBoundingClientRect().left,
          right: node.getBoundingClientRect().left + node.offsetWidth,
        });
      }
    }, []);

    useEffect(() => {
      buildData();
      switch (periodActive) {
        case 'week':
          setTickCount(6);
          break;
        case 'month':
          setTickCount(29);
          break;
        case 'semester':
          setTickCount(5);
          break;
        case 'year':
          setTickCount(11);
          break;
        case 'ytd':
          setTickCount(DateTime.now().month - 1);
          break;
      }
    }, [data, periodActive]);

    const buildData = () => {
      const areaArr: IAreaChartData[] = [];
      let max = data?.[0].assetValue || 0;
      let min = data?.[0].assetValue || 0;
      data?.map((item, index) => {
        areaArr.push({ y: item.assetValue, x: index });
        if (item.assetValue > max) {
          max = item.assetValue;
        }

        if (item.assetValue < min) {
          min = item.assetValue;
        }
      });

      setFirstDate(DateTime.fromISO(data?.[0].date || initialDate.toISO()));

      setAreaData(areaArr);
      setMinValue(min);
      setMaxValue(max + 0.01);
    };

    return (
      <div style={{ marginBottom: 20, marginTop: 20 }} ref={containerRef}>
        {areaData.length > 0 && containerWidth > 0 && containerPosition.right > 0 && (
          <VictoryChart
            width={containerWidth}
            height={225}
            standalone
            domain={{ y: [minValue, maxValue] }}
            padding={{ bottom: 10 }}
            domainPadding={{ y: [0, 40], x: [0, 0] }}
            containerComponent={
              <VictoryCursorContainer
                disable
                width={containerWidth}
                height={225}
                cursorDimension='x'
                defaultCursorValue={containerWidth - 40}
                cursorComponent={
                  <NavigatorComponent
                    containerWidth={containerWidth}
                    containerPosition={containerPosition}
                    tickCount={tickCount}
                    changeValue={(n) => changeActivePoint(n)}
                    theme={theme || 'dark'}
                  />
                }
                cursorLabelComponent={<></>}
              />
            }
          >
            <VictoryGroup
              style={{
                data: { strokeWidth: 2, fillOpacity: 0.2 },
              }}
              singleQuadrantDomainPadding={{ x: false }}
              domainPadding={{ x: 20 }}
            >
              <VictoryArea
                style={{
                  ...chartStyle.area,
                  data: {
                    fill: palette.blue[500],
                    stroke: palette.blue[400],
                  },
                }}
                data={areaData}
                range={[minValue, maxValue]}
              />
            </VictoryGroup>
            <VictoryAxis dependentAxis tickFormat={() => ''} style={chartStyle.axisHorizontal} />
            <VictoryAxis tickFormat={() => ''} style={chartStyle.axisVertical} />
            <VictoryGroup singleQuadrantDomainPadding={{ x: false }} domainPadding={{ x: 20 }}>
              <VictoryScatter
                style={{
                  data: { fill: palette.blue[400] },
                }}
                size={5}
                data={[
                  {
                    x: 0,
                    y: areaData[0].y,
                    symbol: 'diamond',
                  },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        )}
        <Box className='flex-row space-between'>
          <Typo fontWeight='600' size='xs' color={palette.gray[700]}>
            {firstDate.toLocaleString(DateTime.DATE_MED, {
              locale: 'en-us',
            })}
          </Typo>
          <Typo fontWeight='600' size='xs' color={palette.gray[700]}>
            {endDate.toLocaleString(DateTime.DATE_MED, {
              locale: 'en-us',
            })}
          </Typo>
        </Box>
      </div>
    );
  },
);

export { AreaChart };
