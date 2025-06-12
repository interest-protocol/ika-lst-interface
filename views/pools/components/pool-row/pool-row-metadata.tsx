import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import useMetadata from '@/hooks/use-metadata';

import { PoolRowMetadataProps } from './pool-row.types';

const PoolRowMetadata: FC<PoolRowMetadataProps> = ({ lpCoinType }) => {
  const { data: metadata, isLoading: metadataLoading } = useMetadata([
    lpCoinType,
  ]);

  return (
    <Div display="flex" alignItems="center" gap="0.5rem">
      {metadataLoading ? (
        <Skeleton width="1.5rem" height="1.5rem" borderRadius="50%" />
      ) : (
        <Img
          width="1.5rem"
          height="1.5rem"
          borderRadius="50%"
          src={metadata?.[lpCoinType]?.iconUrl}
          alt={metadata?.[lpCoinType]?.symbol}
        />
      )}
      {metadataLoading ? (
        <Skeleton width="6rem" />
      ) : (
        <Span whiteSpace="nowrap">{metadata?.[lpCoinType]?.symbol}</Span>
      )}
      {metadataLoading ? (
        <Skeleton width="0.875rem" height="0.9375rem" />
      ) : (
        <Div
          display="flex"
          bg="#FFFFFF14"
          width="1.875rem"
          height="1.4375rem"
          alignItems="center"
          justifyContent="center"
          borderRadius="1.6875rem"
        >
          <Span
            fontWeight="400"
            color="#FFFFFF"
            fontSize="0.75rem"
            whiteSpace="nowrap"
          >
            v3
          </Span>
        </Div>
      )}
    </Div>
  );
};

export default PoolRowMetadata;
