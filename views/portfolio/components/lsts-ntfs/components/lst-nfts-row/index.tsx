import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import LSTNFTsRowMetadata from './lst-nfts-row-metadata';
import LSTNFTsRowMetrics from './lst-nfts-row-metrics';
import LSTNFTsRowMetricsMobile from './lst-nfts-row-metrics-mobile';
import { LSTNFTsRowProps } from './lsts-row.types';

const LSTNFTsRow: FC<LSTNFTsRowProps> = ({
  iconUrl,
  token,
  symbol,
  totalStaked,
  toWithdraw,
  status,
}) => {
  return (
    <Div
      cursor="pointer"
      border="1px solid"
      alignItems="center"
      justifyItems="center"
      borderColor="#FFFFFF1A"
      borderRadius="0.625rem"
      p={['1rem', '1rem', '1rem']}
      display={['block', 'block', 'grid']}
      transition="background-color 0.2s ease"
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr 1fr 1fr']}
      nHover={{ borderColor: '#FFFFFF33', bg: '#EE2B5B40' }}
    >
      <Div width="100%" display={['block', 'block', 'none']}>
        <Div mb="0.75rem" gap="0.5rem" display="flex" alignItems="center">
          <LSTNFTsRowMetadata token={token} symbol={symbol} iconUrl={iconUrl} />
        </Div>
        <LSTNFTsRowMetricsMobile
          status={status}
          totalStaked={totalStaked}
          toWithdraw={toWithdraw}
        />
      </Div>

      <Div display={['none', 'none', 'contents']}>
        <LSTNFTsRowMetadata token={token} symbol={symbol} iconUrl={iconUrl} />

        <LSTNFTsRowMetrics
          status={status}
          totalStaked={totalStaked}
          toWithdraw={toWithdraw}
        />
      </Div>
    </Div>
  );
};

export default LSTNFTsRow;
