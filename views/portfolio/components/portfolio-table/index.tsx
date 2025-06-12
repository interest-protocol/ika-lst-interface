import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import EmptyStateMessage from './components/portfolio-table-empty-state-message';
import PortfolioTableHeader from './components/portfolio-table-header';
import { IPortfolioTableProps } from './components/portfolio-table-header/table-header.types';
import PortfolioTableRow from './components/portfolio-table-row';

const PortfolioTable: FC<IPortfolioTableProps> = ({
  title,
  headers,
  data,
  totalTokens,
  totalValue,
  tableType = 'basic',
}) => {
  const hasData = Array.isArray(data) && data.length > 0;
  const hasStatus = hasData && 'status' in data[0];

  return (
    <Div gap="1rem" display="flex" flexDirection="column">
      {hasData && (
        <PortfolioTableHeader
          title={title}
          totalValue={totalValue}
          totalTokens={totalTokens}
        />
      )}

      <Div
        bg="#121212"
        display="flex"
        border="1px solid"
        borderRadius="1rem"
        flexDirection="column"
        p={['0.75rem', '1rem']}
        borderColor="#FFFFFF1A"
        gap={['1rem', '1rem', '0.5rem']}
      >
        {hasData && (
          <Div
            px="1rem"
            pb="0.5rem"
            display={['none', 'none', 'grid']}
            gridTemplateColumns={`repeat(${
              headers.length + (hasStatus ? 2 : 0)
            }, 1fr)`}
          >
            {headers.map((header) => (
              <P
                key={unikey()}
                color="#FFFFFFB2"
                fontSize="0.875rem"
                fontWeight="400"
                fontFamily="JetBrains Mono"
                textAlign={header.align || 'left'}
              >
                {header.label}
              </P>
            ))}

            {hasStatus && (
              <>
                <Div />
                <Div />
              </>
            )}
          </Div>
        )}

        <Div gap="0.5rem" display="flex" flexDirection="column">
          {!hasData ? (
            <EmptyStateMessage />
          ) : (
            data.map((item) => (
              <PortfolioTableRow
                key={unikey()}
                data={item}
                headers={headers}
                tableType={tableType}
              />
            ))
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default PortfolioTable;
