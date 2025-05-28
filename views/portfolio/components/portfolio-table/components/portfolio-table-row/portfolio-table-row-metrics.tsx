import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import PortfolioTableRowMetadata from './portfolio-table-row-metadata';
import { IPortfolioTableRowMetricsProps } from './portfolio-table-row-metrics.types';

const PortfolioTableRowMetrics: FC<IPortfolioTableRowMetricsProps> = ({
  data,
  headers,
  tableType,
}) => {
  const isStatus = 'status' in data;

  return (
    <Div display={['none', 'none', 'contents']}>
      {headers.map((header) => {
        const value = data[header.key as keyof typeof data];
        const isLoading = value == null;
        const isMetadata = ['iconUrl', 'symbol', 'token'].includes(header.key);

        if (isMetadata) {
          return (
            <PortfolioTableRowMetadata
              data={data}
              key={unikey()}
              tableType={tableType}
            />
          );
        }

        return (
          <Span
            key={unikey()}
            color="#FFFFFF"
            textAlign="center"
            fontSize="0.875rem"
          >
            {isLoading ? (
              <Skeleton width="4rem" />
            ) : header.format === 'currency' ? (
              formatDollars(Number(value))
            ) : (
              value
            )}
          </Span>
        );
      })}

      {isStatus && (
        <>
          <Span
            key={unikey()}
            textAlign="center"
            borderRadius="16px"
            fontSize="0.875rem"
            padding="0.5rem 0.6rem"
            color={getStatusUIConfig(data.status).color}
            backgroundColor={getStatusUIConfig(data.status).bg}
          >
            {data.status}
          </Span>

          <Div key={unikey()} display="flex" justifyContent="center">
            <Button
              py="0.8rem"
              border="none"
              fontSize="16px"
              fontWeight="500"
              borderRadius="0.5rem"
              display="inline-block"
              width={['100%', 'auto']}
              marginTop={['0.4rem', '0']}
              color={getStatusUIConfig(data.status).buttonColor}
              disabled={getStatusUIConfig(data.status).disabled}
              px={['1.5rem', '1.25rem', '1rem']}
              backgroundColor={getStatusUIConfig(data.status).buttonBg}
              opacity={getStatusUIConfig(data.status).disabled ? 0.6 : 1}
              cursor={
                getStatusUIConfig(data.status).disabled
                  ? 'not-allowed'
                  : 'pointer'
              }
            >
              {getStatusUIConfig(data.status).text}
            </Button>
          </Div>
        </>
      )}
    </Div>
  );
};

export default PortfolioTableRowMetrics;
