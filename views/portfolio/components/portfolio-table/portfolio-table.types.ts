export interface IAsset {
  id: string;
  symbol: string;
  iconUrl: string;
}

export interface IBalanceAsset extends IAsset {
  balance: string;
  price: number;
  value: number;
}

export interface IStakedAsset extends IAsset {
  totalStaked: string;
  toWithdraw: number;
  status: string;
}

export interface ILST extends IBalanceAsset {}
export interface ICoin extends IBalanceAsset {}

export interface ILST_NFT extends IStakedAsset {
  token: string;
}

export interface INativeStakedWal extends IStakedAsset {}

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
  data:
    | ReadonlyArray<ILST>
    | ReadonlyArray<ILST_NFT>
    | ReadonlyArray<INativeStakedWal>
    | ReadonlyArray<ICoin>;
  headers: ReadonlyArray<ITableHeader>;
  tableType?: 'basic' | 'staked' | 'nft';
  onClick?: () => void;
}
