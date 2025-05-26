import { Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import NativeStakedWalRowButtonStatus from './native-staked-wal-row-button-status';
import { NativeStakedWalRowMetricsProps } from './native-staked-wal-row-metrics.types';

const NativeStakedWalRowMetrics: FC<NativeStakedWalRowMetricsProps> = ({
  totalStaked,
  toWithdraw,
  status,
}) => {
  const isLoading = !totalStaked || !toWithdraw || !status;
  const statusStyles = getStatusUIConfig(status);

  return (
    <>
      <Span color="#FFFFFF" textAlign="center" fontSize="0.875rem">
        {isLoading ? <Skeleton width="4rem" /> : totalStaked}
      </Span>

      <Span color="#FFFFFF" fontSize="0.875rem" textAlign="center">
        {isLoading ? (
          <Skeleton width="4rem" />
        ) : (
          formatDollars(Number(toWithdraw))
        )}
      </Span>

      <Span
        textAlign="center"
        borderRadius="16px"
        fontSize="0.875rem"
        padding="0.5rem 0.6rem"
        color={statusStyles.color}
        backgroundColor={statusStyles.bg}
      >
        {isLoading ? <Skeleton width="4rem" /> : status}
      </Span>

      <NativeStakedWalRowButtonStatus status={status} />
    </>
  );
};

export default NativeStakedWalRowMetrics;
