import {
  ICoin,
  ILST,
  ILST_NFT,
  INativeStakedWal,
  ITableHeader,
} from '../../portfolio-table.types';
export interface IPortfolioTableProps {
  title: string;
  headers: ReadonlyArray<ITableHeader>;
  data:
    | ReadonlyArray<ILST>
    | ReadonlyArray<ILST_NFT>
    | ReadonlyArray<INativeStakedWal>
    | ReadonlyArray<ICoin>;
  totalTokens?: string | number;
  totalValue?: number;
  tableType?: 'basic' | 'staked' | 'nft';
  onRowClick?: (item: string) => void;
}
