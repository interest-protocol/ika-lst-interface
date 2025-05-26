import { Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import LSTNFTsRowButtonStatus from './lst-nfts-row-button-status';
import { LSTNFTsRowMetricsProps } from './lst-nfts-row-metrics.types';

const LSTNFTsRowMetrics: FC<LSTNFTsRowMetricsProps> = ({
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

      <LSTNFTsRowButtonStatus status={status} />
    </>
  );
};

export default LSTNFTsRowMetrics;
