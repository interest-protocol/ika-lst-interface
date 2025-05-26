import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { NativeStakedWalRowProps } from './native-staked-wal-row.types';
import NativeStakedWalRowMetadata from './native-staked-wal-row-metadata';
import NativeStakedWalRowMetrics from './native-staked-wal-row-metrics';
import NativeStakedWalRowMetricsMobile from './native-staked-wal-row-metrics-mobile';

const NativeStakedWalRow: FC<NativeStakedWalRowProps> = ({
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
          <NativeStakedWalRowMetadata
            token={token}
            symbol={symbol}
            iconUrl={iconUrl}
          />
        </Div>
        <NativeStakedWalRowMetricsMobile
          status={status}
          totalStaked={totalStaked}
          toWithdraw={toWithdraw}
        />
      </Div>

      <Div display={['none', 'none', 'contents']}>
        <NativeStakedWalRowMetadata
          token={token}
          symbol={symbol}
          iconUrl={iconUrl}
        />

        <NativeStakedWalRowMetrics
          status={status}
          totalStaked={totalStaked}
          toWithdraw={toWithdraw}
        />
      </Div>
    </Div>
  );
};

export default NativeStakedWalRow;
