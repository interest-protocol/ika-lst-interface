import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { CoinsRowMetadataProps } from './coins-row.types';

const CoinsRowMetadata: FC<CoinsRowMetadataProps> = ({ symbol, iconUrl }) => {
  const isLoading = !iconUrl;

  return (
    <Div display="flex" alignItems="center" gap="0.5rem">
      <Div width="1.5rem" height="1.5rem" overflow="hidden" borderRadius="50%">
        {isLoading ? (
          <Skeleton width="100%" height="100%" circle />
        ) : (
          <Img
            width="100%"
            height="100%"
            alt={symbol}
            src={iconUrl}
            borderRadius="50%"
          />
        )}
      </Div>
      <Span color="#FFFFFF" fontSize="0.875rem" fontWeight="500">
        {symbol}
      </Span>
    </Div>
  );
};

export default CoinsRowMetadata;
