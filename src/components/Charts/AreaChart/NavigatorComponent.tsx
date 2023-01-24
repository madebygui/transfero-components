/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { NavigatorComponentProps } from './AreaChart.types';

interface PositionProps {
  x: number;
  coords: {
    x: number;
  };
}

const NavigatorComponent: React.FC<NavigatorComponentProps> = ({
  containerWidth,
  containerPosition,
  tickCount,
  changeValue,
  theme,
}) => {
  const { palette } = useTheme();

  const [position, setPosition] = useState<PositionProps>({
    x: containerWidth - 40,
    coords: { x: 0 },
  });
  const [currentIndex, setCurrentIndex] = useState(tickCount);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    document.addEventListener('mouseup', () =>
      document.removeEventListener('mousemove', handleMouseMove.current),
    );
  }, []);

  useEffect(() => {
    changeValue(currentIndex);
  }, [currentIndex]);

  const findClosestPointSorted = (value: any) => {
    const chartWidth = containerWidth - 40;
    const step = chartWidth / tickCount;
    const arrSteps: number[] = [];
    let counter = 0;
    while (counter <= tickCount) {
      arrSteps.push(counter * step);
      counter++;
    }

    const closest = arrSteps.reduce(function (prev, curr) {
      return Math.abs(curr - value.x) < Math.abs(prev - value.x) ? curr : prev;
    });

    const idx = arrSteps.indexOf(closest);

    setCurrentIndex(idx);

    return { step: idx, x: closest };
  };

  const handleMouseMove = useRef((e: any) => {
    setPosition((position: PositionProps) => {
      let pageX = e.pageX;

      if (pageX > containerPosition.right - 20) {
        pageX = containerPosition.right - 20;
      } else if (pageX < containerPosition.left + 20) {
        pageX = containerPosition.left + 20;
      }

      const xDiff = position.coords.x - pageX;

      let resultX = position.x - xDiff;
      if (resultX <= 0) {
        resultX = 0;
      } else if (resultX >= containerWidth - 40) {
        resultX = containerWidth - 40;
      }

      findClosestPointSorted({ x: resultX });

      return {
        x: resultX,
        coords: {
          x: pageX,
        },
      };
    });
  });

  const handleMouseDown = (e: any) => {
    const pageX = e.pageX;
    setPosition((position: PositionProps) =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
        },
      }),
    );
    document.addEventListener('mousemove', handleMouseMove.current);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove.current);
    const activePoint = findClosestPointSorted(position);
    setPosition((position: PositionProps) =>
      Object.assign({}, { ...position, x: activePoint.x }, { coords: {} }),
    );
  };

  return (
    <svg
      ref={svgRef}
      x={position.x}
      width='55'
      height='220'
      viewBox='0 0 70 280'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 27L27 2L53 27L27 53L2 27Z'
        fill={theme === 'dark' ? palette.gray[100] : palette.blue[400]}
      />
      <path
        d='M0 27.5L27.5 0L55 27.5L27.5 55L0 27.5Z'
        fill='#000000'
        fillOpacity='0'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        id='path-move'
      />
      <path
        d='M23 21L17 27L23 33M31 21L37.8296 27L31 33'
        stroke={theme === 'dark' ? palette.blue[400] : palette.gray[100]}
        strokeWidth='1.5'
        strokeLinecap='square'
      />
      <line
        x1='28'
        y1='53'
        x2='28'
        y2='270'
        stroke={theme === 'dark' ? palette.gray[100] : palette.gray[400]}
        strokeDasharray='2 2'
      />
    </svg>
  );
};

export { NavigatorComponent };
