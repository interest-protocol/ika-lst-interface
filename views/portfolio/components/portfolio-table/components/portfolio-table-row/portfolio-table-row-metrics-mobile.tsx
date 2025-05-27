import { Button, Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import PortfolioTableRowMetadata from './portfolio-table-row-metadata';
import { IPortfolioTableRowMetricsProps } from './portfolio-table-row-metrics.types';

const PortfolioTableRowMetricsMobile: FC<IPortfolioTableRowMetricsProps> = ({
  data,
  headers,
  tableType,
}) => (
  <Div width="100%" display={['block', 'block', 'none']}>
    <Div mb="0.75rem" gap="0.5rem" display="flex" alignItems="center">
      {!data.iconUrl ? (
        <Skeleton
          height="2.5rem"
          width="100%"
          borderRadius="0.5rem"
          style={{ flex: 1 }}
        />
      ) : (
        <PortfolioTableRowMetadata data={data} tableType={tableType} />
      )}
    </Div>

    <Div gap="0.5rem" display="flex" flexDirection="column">
      {headers.map((header) => {
        if (
          header.key === 'icon' ||
          header.key === 'symbol' ||
          header.key === 'token'
        ) {
          return null;
        }

        const value = data[header.key as keyof typeof data];
        const isLoading =
          typeof value === 'string'
            ? value.trim() === ''
            : value === undefined || value === null;
        const isStatus = header.key === 'status';

        return (
          <Div
            display="flex"
            key={header.key}
            alignItems="center"
            justifyContent="space-between"
          >
            {header.label?.toLowerCase() !== 'status' && (
              <P color="#FFFFFF80" fontSize="0.875rem">
                {header.label}:
              </P>
            )}
            {isStatus ? (
              <Div
                width={['100%', 'auto']}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
              >
                <Span
                  textAlign="center"
                  borderRadius="16px"
                  fontSize="0.875rem"
                  padding="0.5rem 0.6rem"
                  color={getStatusUIConfig(value).color}
                  backgroundColor={getStatusUIConfig(value).bg}
                >
                  {isLoading ? <Skeleton width="4rem" /> : value}
                </Span>
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
            ) : (
              <Span
                color="#FFFFFF"
                fontWeight="500"
                fontSize="0.875rem"
                textAlign="right"
              >
                {isLoading ? (
                  <Skeleton width="4rem" />
                ) : header.format === 'currency' ? (
                  formatDollars(Number(value))
                ) : (
                  value
                )}
              </Span>
            )}
          </Div>
        );
      })}
    </Div>
  </Div>
);

export default PortfolioTableRowMetricsMobile;
