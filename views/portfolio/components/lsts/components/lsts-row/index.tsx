import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { LSTsRowProps } from './lsts-row.types';
import LSTsRowMetadata from './lsts-row-metadata';
import LSTsRowMetrics from './lsts-row-metrics';
import LSTsRowMetricsMobile from './lsts-row-metrics-mobile';

const LSTsRow: FC<LSTsRowProps> = ({
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
          <LSTsRowMetadata symbol={symbol} iconUrl={iconUrl} />
        </Div>
        <LSTsRowMetricsMobile balance={balance} price={price} value={value} />
      </Div>

      <Div display={['none', 'none', 'contents']}>
        <LSTsRowMetadata symbol={symbol} iconUrl={iconUrl} />

        <LSTsRowMetrics balance={balance} price={price} value={value} />
      </Div>
    </Div>
  );
};

export default LSTsRow;
