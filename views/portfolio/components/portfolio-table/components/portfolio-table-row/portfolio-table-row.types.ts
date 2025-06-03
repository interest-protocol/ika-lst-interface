import {
  ILST,
  ILST_NFT,
  INativeStakedWal,
  ITableHeader,
} from '../../portfolio-table.types';
export interface IPortfolioTableRowProps {
  data: ILST | ILST_NFT | INativeStakedWal;
  headers: ReadonlyArray<ITableHeader>;
  tableType?: 'basic' | 'staked' | 'nft';
  onClick?: () => void;
}
