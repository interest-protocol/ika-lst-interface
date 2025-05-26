import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { NativeStakedWalRowMetadataProps } from './native-staked-wal-row.types';

const NativeStakedWalRowMetadata: FC<NativeStakedWalRowMetadataProps> = ({
  symbol,
  iconUrl,
  token,
}) => {
  const isLoading = !iconUrl;

  return (
    <Div gap="0.5rem" display="flex" alignItems="center">
      <Div width="1.5rem" height="1.5rem" overflow="hidden" borderRadius="4px">
        {isLoading ? (
          <Skeleton circle width="100%" height="100%" />
        ) : (
          <Img
            width="100%"
            height="100%"
            alt={symbol}
            src={iconUrl}
            borderRadius="4px"
          />
        )}
      </Div>
      <Div gap="0.2rem" display="flex" flexDirection="column">
        <Span color="#FFFFFF" fontWeight="500" fontSize="0.875rem">
          {token}
        </Span>
        <Span color="#FFFFFF" fontWeight="500" fontSize="0.875rem">
          {symbol}
        </Span>
      </Div>
    </Div>
  );
};

export default NativeStakedWalRowMetadata;
