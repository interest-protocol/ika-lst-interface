import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { CoinsRowProps } from './coins-row.types';
import CoinsRowMetadata from './coins-row-metadata';
import CoinsRowMetrics from './coins-row-metrics';
import CoinsRowMetricsMobile from './coins-row-metrics-mobile';

const CoinsRow: FC<CoinsRowProps> = ({
  symbol,
  iconUrl,
  balance,
  price,
  value,
}) => {
  return (
    <Div
      cursor="pointer"
      border="1px solid"
      alignItems="center"
      borderColor="#FFFFFF1A"
      borderRadius="0.625rem"
      p={['1rem', '1rem', '1rem']}
      display={['block', 'block', 'grid']}
      transition="background-color 0.2s ease"
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr 1fr']}
      nHover={{ borderColor: '#FFFFFF33', bg: '#EE2B5B40' }}
    >
      <Div display={['block', 'block', 'none']} width="100%">
        <Div display="flex" alignItems="center" gap="0.5rem" mb="0.75rem">
          <CoinsRowMetadata symbol={symbol} iconUrl={iconUrl} />
        </Div>
        <CoinsRowMetricsMobile balance={balance} price={price} value={value} />
      </Div>

      <Div display={['none', 'none', 'contents']}>
        <CoinsRowMetadata symbol={symbol} iconUrl={iconUrl} />

        <CoinsRowMetrics balance={balance} price={price} value={value} />
      </Div>
    </Div>
  );
};

export default CoinsRow;
