import { Button, Div, P, Span, SpanProps } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import { IPortfolioTableRowProps as IPortfolioTableRowMetricsProps } from './portfolio-table-row.types';
import PortfolioTableRowMetadata from './portfolio-table-row-metadata';

const PortfolioTableRowMetricsMobile: FC<IPortfolioTableRowMetricsProps> = ({
  data,
  headers,
  tableType,
}) => {
  const isStatus = 'status' in data;
  const { statusStyle, buttonStyle } = isStatus
    ? getStatusUIConfig(data.status as string)
    : { statusStyle: {}, buttonStyle: {} };
  const filteredHeaders = headers.filter(
    (header) => !['icon', 'symbol', 'token', 'status'].includes(header.key)
  );

  return (
    <Div width="100%" display={['block', 'block', 'none']}>
      <Div mb="0.75rem" gap="0.5rem" display="flex" alignItems="center">
        <PortfolioTableRowMetadata data={data} tableType={tableType} />
      </Div>

      <Div gap="0.5rem" display="flex" flexDirection="column">
        {filteredHeaders.map((header) => {
          const value = data[header.key as keyof typeof data];
          const isLoading = value == null;

          return (
            <Div
              key={unikey()}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <P color="#FFFFFF80" fontSize="0.875rem">
                {header.label}:
              </P>
              <Span
                color="#FFFFFF"
                fontWeight="500"
                fontSize="0.875rem"
                fontFamily="JetBrains Mono"
              >
                {isLoading ? (
                  <Skeleton width="4rem" />
                ) : header.format === 'currency' ? (
                  formatDollars(Number(value))
                ) : (
                  value
                )}
              </Span>
            </Div>
          );
        })}

        {isStatus && (
          <>
            <Div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Span key={unikey()} {...(statusStyle as SpanProps)}>
                {data.status}
              </Span>
            </Div>

            <Div display="flex" justifyContent="flex-end">
              <Button {...buttonStyle}>{buttonStyle.text}</Button>
            </Div>
          </>
        )}
      </Div>
    </Div>
  );
};

export default PortfolioTableRowMetricsMobile;
