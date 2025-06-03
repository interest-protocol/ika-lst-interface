import { Button, Div, Span, SpanProps } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import { formatDollars } from '@/utils';
import { getStatusUIConfig } from '@/utils/status-ui-config';

import { IPortfolioTableRowProps } from './portfolio-table-row.types';
import PortfolioTableRowMetadata from './portfolio-table-row-metadata';

const PortfolioTableRowMetrics: FC<IPortfolioTableRowProps> = ({
  data,
  headers,
  tableType,
}) => {
  const isStatus = 'status' in data;
  const { statusStyle, buttonStyle } = isStatus
    ? getStatusUIConfig(data.status as string)
    : { statusStyle: {}, buttonStyle: {} };

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
            fontSize="1rem"
            fontWeight="400"
            textAlign="center"
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
          <Div display="flex" alignItems="center" justifyContent="center">
            <Span key={unikey()} {...(statusStyle as SpanProps)}>
              {data.status}
            </Span>
          </Div>

          <Div key={unikey()} display="flex" justifyContent="center">
            <Button {...buttonStyle}>{buttonStyle.text}</Button>
          </Div>
        </>
      )}
    </Div>
  );
};

export default PortfolioTableRowMetrics;
