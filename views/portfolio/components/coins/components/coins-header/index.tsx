import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils';

import { CoinsHeaderProps } from './coins.header.types';
import StatBox from './stat-box';

const CoinsHeader: FC<CoinsHeaderProps> = ({ totalValue }) => (
  <Div
    display="flex"
    alignItems="center"
    gap={['0.5rem', '0']}
    flexWrap={['wrap', 'nowrap']}
    justifyContent="space-between"
  >
    <P color="#FFFFFF" fontSize="1rem" fontWeight="600">
      Coins
    </P>

    <Div display="flex" flexWrap="wrap" gap={['0.375rem', '0.5rem']}>
      <StatBox>{formatDollars(totalValue)}</StatBox>
    </Div>
  </Div>
);

export default CoinsHeader;
