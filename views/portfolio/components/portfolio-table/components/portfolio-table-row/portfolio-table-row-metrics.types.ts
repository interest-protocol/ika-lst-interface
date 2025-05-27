import {
  ILST,
  ILST_NFT,
  INativeStakedWal,
  ITableHeader,
} from '../../portfolio-table.types';

export interface IPortfolioTableRowMetricsProps {
  data: ILST | ILST_NFT | INativeStakedWal;
  headers: ITableHeader[];
  tableType?: 'basic' | 'staked' | 'nft';
  onClick?: () => void;
}
