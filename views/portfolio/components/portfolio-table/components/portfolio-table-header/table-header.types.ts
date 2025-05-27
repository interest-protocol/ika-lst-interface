import {
  ILST,
  ILST_NFT,
  INativeStakedWal,
  ITableHeader,
} from '../../portfolio-table.types';
export interface IPortfolioTableProps {
  title: string;
  headers: ITableHeader[];
  data: ILST[] | ILST_NFT[] | INativeStakedWal[];
  totalTokens?: string | number;
  totalValue?: number;
  tableType?: 'basic' | 'staked' | 'nft';
  onRowClick?: (item: string) => void;
}
