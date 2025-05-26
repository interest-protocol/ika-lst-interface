import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import NativeStakedWalRowButtonStatus from './native-staked-wal-row-button-status';
import { NativeStakedWalRowMetricsProps } from './native-staked-wal-row-metrics.types';

const NativeStakedWalRowMetricsMobile: FC<NativeStakedWalRowMetricsProps> = ({
  totalStaked,
  toWithdraw,
  status,
}) => {
  const isLoading = !totalStaked || !toWithdraw || !status;
  const statusStyles = getStatusUIConfig(status);

  return (
    <Div display="flex" flexDirection="column" gap="0.5rem">
      <Div display="flex" justifyContent="space-between" alignItems="center">
        <P color="#FFFFFF80" fontSize="0.875rem">
          Total Staked:
        </P>
        <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
          {isLoading ? <Skeleton width="4rem" /> : totalStaked}
        </Span>
      </Div>

      <Div display="flex" justifyContent="space-between" alignItems="center">
        <P color="#FFFFFF80" fontSize="0.875rem">
          To Withdraw:
        </P>
        <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
          {isLoading ? (
            <Skeleton width="4rem" />
          ) : (
            formatDollars(Number(toWithdraw))
          )}
        </Span>
      </Div>

      <Div display="flex" justifyContent="space-between" alignItems="center">
        <Span
          borderRadius="16px"
          fontSize="0.875rem"
          padding="0.5rem 1rem"
          color={statusStyles.color}
          backgroundColor={statusStyles.bg}
        >
          {isLoading ? <Skeleton width="4rem" /> : status}
        </Span>
      </Div>

      <Div display="flex" justifyContent="space-between" alignItems="center">
        <NativeStakedWalRowButtonStatus status={status} />
      </Div>
    </Div>
  );
};

export default NativeStakedWalRowMetricsMobile;
