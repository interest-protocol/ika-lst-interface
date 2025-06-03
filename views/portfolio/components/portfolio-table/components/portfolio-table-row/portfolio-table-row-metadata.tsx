import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ILST, ILST_NFT, INativeStakedWal } from '../../portfolio-table.types';
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

  const hasAddress = (
    data: ILST | ILST_NFT | INativeStakedWal
  ): data is ILST_NFT => {
    return 'address' in data && data.address !== undefined;
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
          {hasAddress(data) && data.address && (
            <Span color="#FFFFFF" fontWeight="500" fontSize="1rem">
              {data.address}
            </Span>
          )}
          <Span
            fontWeight="500"
            color="#FFFFFF80"
            fontSize="0.75rem"
            fontFamily="JetBrains Mono"
          >
            {data.symbol}
          </Span>
        </Div>
      ) : (
        <Span
          color="#FFFFFF"
          fontWeight="400"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          {data.symbol}
        </Span>
      )}
    </Div>
  );
};

export default PortfolioTableRowMetadata;
