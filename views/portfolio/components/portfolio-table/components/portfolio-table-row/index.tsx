import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { IPortfolioTableRowProps } from './portfolio-table-row.types';
import PortfolioTableRowMetrics from './portfolio-table-row-metrics';
import PortfolioTableRowMetricsMobile from './portfolio-table-row-metrics-mobile';

const PortfolioTableRow: FC<IPortfolioTableRowProps> = ({
  data,
  headers,
  tableType,
  onClick,
}) => {
  return (
    <Div
      cursor="pointer"
      onClick={onClick}
      border="1px solid"
      alignItems="center"
      borderColor="#FFFFFF1A"
      borderRadius="0.625rem"
      p={['1rem', '1rem', '1rem']}
      display={['block', 'block', 'grid']}
      transition="background-color 0.2s ease"
      nHover={{ borderColor: '#FFFFFF33', bg: '#EE2B5B40' }}
      gridTemplateColumns={['1fr', '1fr', `repeat(${headers.length}, 1fr)`]}
    >
      <PortfolioTableRowMetricsMobile
        data={data}
        headers={headers}
        tableType={tableType}
      />

      <PortfolioTableRowMetrics
        data={data}
        headers={headers}
        tableType={tableType}
      />
    </Div>
  );
};

export default PortfolioTableRow;
