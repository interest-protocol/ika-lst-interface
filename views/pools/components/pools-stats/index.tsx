import { Div, P } from '@stylin.js/elements';
import { FC, useState } from 'react';

import { formatDollars } from '@/utils';

import { PoolsChart } from './pools-chart';
import { usePoolsMetricsOvertime } from './pools-stats.hooks';

const PoolsPerformance: FC = () => {
  const { latestTvl } = usePoolsMetricsOvertime();
  const [interval, setInterval] = useState<'D' | 'W' | 'M'>('D');

  return (
    <Div
      p="1rem"
      flex="1"
      bg="#FFFFFF0D"
      border="1px solid"
      borderRadius="1rem"
      borderColor="#FFFFFF1A"
      minWidth={['unset', 'unset', 'unset', '36.0625rem']}
      width={['100%', '100%', '100%', 'calc(100% - 17.4375rem)']}
    >
      <Div
        mb="0.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Div>
          <P color="#FFFFFF" fontFamily="JetBrains Mono">
            {formatDollars(latestTvl)}
          </P>
          <P color="#FFFFFF80">Total Value Locked</P>
        </Div>
        <Div
          gap="0.25rem"
          padding="4px"
          display="flex"
          width="4.75rem"
          height="1.625rem"
          alignItems="center"
          borderRadius="0.25rem"
          border="1px solid #EE2B5B4D"
        >
          {(['D', 'W', 'M'] as const).map((intendedInterval) => (
            <Div
              width="1.25rem"
              height="1.125rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="0.75rem"
              borderRadius="0.25rem"
              key={intendedInterval}
              onClick={() => setInterval(intendedInterval)}
              color="#FFFFFFB2"
              pointerEvents={interval === intendedInterval ? 'none' : undefined}
              backgroundColor={
                interval === intendedInterval ? '#EE2B5B80' : 'transparent'
              }
              style={{
                cursor: interval === intendedInterval ? 'default' : 'pointer',
              }}
            >
              {intendedInterval}
            </Div>
          ))}
        </Div>
      </Div>
      <PoolsChart
        agg={
          interval === 'D' ? 'daily' : interval === 'W' ? 'weekly' : 'monthly'
        }
      />
    </Div>
  );
};

export default PoolsPerformance;
