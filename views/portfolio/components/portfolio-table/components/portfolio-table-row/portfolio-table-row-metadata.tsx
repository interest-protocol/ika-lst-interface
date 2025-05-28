import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  ICoin,
  ILST,
  ILST_NFT,
  INativeStakedWal,
} from '../../portfolio-table.types';
import { IPortfolioTableRowMetadataProps } from './portfolio-table-row-metadata.types';

const PortfolioTableRowMetadata: FC<IPortfolioTableRowMetadataProps> = ({
  data,
  tableType,
}) => {
  const isLoading = !data.iconUrl;
  const isNFT = tableType === 'nft';
  const getBorderRadius = () => {
    if (tableType === 'nft') return '4px';
    if (tableType === 'staked') return '2px';
    return '50%';
  };

  const borderRadius = getBorderRadius();

  const hasToken = (
    data: ILST | ILST_NFT | INativeStakedWal | ICoin
  ): data is ILST_NFT => {
    return (data as ILST_NFT).token !== undefined;
  };

  return (
    <Div gap="0.5rem" display="flex" alignItems="center">
      <Div
        width="1.5rem"
        height="1.5rem"
        overflow="hidden"
        borderRadius={borderRadius}
      >
        {isLoading ? (
          <Skeleton width="100%" height="100%" circle={!isNFT} />
        ) : (
          <Img
            width="100%"
            height="100%"
            alt={data.symbol}
            src={data.iconUrl}
            borderRadius={borderRadius}
          />
        )}
      </Div>

      {isNFT || tableType === 'staked' ? (
        <Div gap="0.1rem" display="flex" flexDirection="column">
          {hasToken(data) && data.token && (
            <Span color="#FFFFFF" fontWeight="500" fontSize="1rem">
              {data.token}
            </Span>
          )}
          <Span color="#FFFFFF" fontWeight="500" fontSize="0.75rem">
            {data.symbol}
          </Span>
        </Div>
      ) : (
        <Span color="#FFFFFF" fontWeight="400" fontSize="1rem">
          {data.symbol}
        </Span>
      )}
    </Div>
  );
};

export default PortfolioTableRowMetadata;
