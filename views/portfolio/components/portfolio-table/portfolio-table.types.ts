export interface ILST {
  id: string;
  symbol: string;
  iconUrl: string;
  balance: string;
  price: number;
  value: number;
}

export interface ILST_NFT {
  id: string;
  iconUrl: string;
  token: string;
  symbol: string;
  totalStaked: string;
  toWithdraw: number;
  status: string;
}

export interface INativeStakedWal {
  id: string;
  iconUrl: string;
  symbol: string;
  totalStaked: string;
  toWithdraw: number;
  status: string;
}

export interface ITableHeader {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  format?: 'currency' | 'text' | 'number';
  type?: 'status' | 'data';
}

export interface IPortfolioTableHeaderProps {
  title: string;
  totalTokens?: string | number;
  totalValue?: number;
}
export interface IPortfolioTableRowProps {
  data: ILST[] | ILST_NFT[] | INativeStakedWal[];
  headers: ITableHeader[];
  tableType?: 'basic' | 'staked' | 'nft';
  onClick?: () => void;
}
