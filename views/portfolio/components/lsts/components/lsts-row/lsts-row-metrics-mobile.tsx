import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';

import { LSTsRowMetricsProps } from './lsts-row-metrics.types';

const LSTsRowMetricsMobile: FC<LSTsRowMetricsProps> = ({
  balance,
  price,
  value,
}) => {
  const isLoading = !balance || !price || !value;

  return (
    <Div display="flex" flexDirection="column" gap="0.5rem">
      <Div display="flex" justifyContent="space-between" alignItems="center">
        <P color="#FFFFFF80" fontSize="0.875rem">
          Balance:
        </P>
        <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
          {isLoading ? <Skeleton width="4rem" /> : balance}
        </Span>
      </Div>

      <Div display="flex" justifyContent="space-between" alignItems="center">
        <P color="#FFFFFF80" fontSize="0.875rem">
          Price:
        </P>
        <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
          {isLoading ? <Skeleton width="4rem" /> : formatDollars(Number(price))}
        </Span>
      </Div>

      <Div display="flex" justifyContent="space-between" alignItems="center">
        <P color="#FFFFFF80" fontSize="0.875rem">
          Value:
        </P>
        <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
          {isLoading ? <Skeleton width="4rem" /> : formatDollars(Number(value))}
        </Span>
      </Div>
    </Div>
  );
};

export default LSTsRowMetricsMobile;
