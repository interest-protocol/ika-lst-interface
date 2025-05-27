import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import PortfolioTableRowMetadata from './portfolio-table-row-metadata';
import { IPortfolioTableRowMetricsProps } from './portfolio-table-row-metrics.types';

const PortfolioTableRowMetrics: FC<IPortfolioTableRowMetricsProps> = ({
  data,
  headers,
  tableType,
}) => (
  <Div display={['none', 'none', 'contents']}>
    {headers.map((header) => {
      const value = data[header.key as keyof typeof data];
      const isLoading = value == null;
      const isMetadata =
        header.key === 'iconUrl' ||
        header.key === 'symbol' ||
        header.key === 'token';
      const isStatus = header.key === 'status';

      if (isMetadata) {
        return (
          <PortfolioTableRowMetadata
            key={header.key}
            data={data}
            tableType={tableType}
          />
        );
      }
      if (isStatus) {
        const status = value;
        return (
          <>
            <Span
              textAlign="center"
              borderRadius="16px"
              fontSize="0.875rem"
              padding="0.5rem 0.6rem"
              color={getStatusUIConfig(status).color}
              backgroundColor={getStatusUIConfig(status).bg}
            >
              {isLoading ? <Skeleton width="4rem" /> : status}
            </Span>

            <Div display="flex" key={header.key} justifyContent="center">
              {isLoading ? (
                <Skeleton width="4rem" />
              ) : (
                <Button
                  py="0.8rem"
                  border="none"
                  fontSize="16px"
                  fontWeight="500"
                  borderRadius="0.5rem"
                  display="inline-block"
                  width={['100%', 'auto']}
                  marginTop={['0.4rem', '0']}
                  color={getStatusUIConfig(value).buttonColor}
                  disabled={getStatusUIConfig(value).disabled}
                  px={['1.5rem', '1.25rem', '1rem']}
                  backgroundColor={getStatusUIConfig(value).buttonBg}
                  opacity={getStatusUIConfig(value).disabled ? 0.6 : 1}
                  cursor={
                    getStatusUIConfig(value).disabled
                      ? 'not-allowed'
                      : 'pointer'
                  }
                >
                  {getStatusUIConfig(value).text}
                </Button>
              )}
            </Div>
          </>
        );
      }

      return (
        <Span
          color="#FFFFFF"
          key={header.key}
          fontSize="0.875rem"
          textAlign={header.align || 'center'}
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
  </Div>
);

export default PortfolioTableRowMetrics;
