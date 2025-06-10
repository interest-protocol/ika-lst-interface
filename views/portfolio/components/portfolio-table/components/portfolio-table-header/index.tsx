import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils';

import { IPortfolioTableHeaderProps } from '../../portfolio-table.types';
import StatBox from './stat-box';

const PortfolioTableHeader: FC<IPortfolioTableHeaderProps> = ({
  title,
  totalTokens,
  totalValue,
}) => (
  <Div
    display="flex"
    alignItems="center"
    gap={['0.5rem', '0']}
    flexWrap={['wrap', 'nowrap']}
    justifyContent="space-between"
  >
    <P fontSize="1rem" color="#FFFFFF" fontWeight="600">
      {title}
    </P>

    <Div display="flex" flexWrap="wrap" gap={['0.375rem', '0.5rem']}>
      {totalTokens && <StatBox>{totalTokens} WAL</StatBox>}
      {totalValue && <StatBox>{formatDollars(totalValue)}</StatBox>}
    </Div>
  </Div>
);

export default PortfolioTableHeader;
