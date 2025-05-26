import { Button } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { getStatusUIConfig } from '@/utils/status-ui-config';

import { LSTNFTsRowButtonStatusProps } from './lst-nfts-row-button-status.types';

const LSTNFTsRowButtonStatus: FC<LSTNFTsRowButtonStatusProps> = ({
  status,
}) => {
  const isLoading = !status;
  const statusStyles = getStatusUIConfig(status);

  return isLoading ? (
    <Skeleton height="2.5rem" width="7rem" borderRadius="0.5rem" />
  ) : (
    <Button
      disabled={statusStyles.disabled}
      py="0.8rem"
      border="none"
      fontSize="16px"
      fontWeight="500"
      borderRadius="0.5rem"
      display="inline-block"
      ml={['0', '0', '1rem']}
      color={statusStyles.buttonColor}
      px={['1.5rem', '1.25rem', '1rem']}
      backgroundColor={statusStyles.buttonBg}
      opacity={statusStyles.disabled ? 0.6 : 1}
      cursor={statusStyles.disabled ? 'not-allowed' : 'pointer'}
    >
      {statusStyles.text}
    </Button>
  );
};

export default LSTNFTsRowButtonStatus;
