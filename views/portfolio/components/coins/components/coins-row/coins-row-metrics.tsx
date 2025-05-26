import { Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';

import { CoinsRowMetricsProps } from './coins-row-metrics.types';

const CoinsRowMetrics: FC<CoinsRowMetricsProps> = ({
  balance,
  price,
  value,
}) => {
  const isLoading = !balance || !price || !value;
  return (
    <>
      <Span color="#FFFFFF" fontSize="0.875rem" textAlign="center">
        {isLoading ? <Skeleton width="4rem" /> : balance}
      </Span>

      <Span color="#FFFFFF" fontSize="0.875rem" textAlign="center">
        {isLoading ? <Skeleton width="4rem" /> : formatDollars(Number(price))}
      </Span>

      <Span color="#FFFFFF" fontSize="0.875rem" textAlign="center">
        {isLoading ? <Skeleton width="4rem" /> : formatDollars(Number(value))}
      </Span>
    </>
  );
};

export default CoinsRowMetrics;
