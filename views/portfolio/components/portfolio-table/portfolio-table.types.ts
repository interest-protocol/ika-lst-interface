export interface IAsset {
  id: string;
  symbol: string;
  iconUrl: string;
}
export interface ILST extends IAsset {
  balance: string;
  price: number;
  value: number;
}
export interface INativeStakedWal extends IAsset {
  totalStaked: string;
  toWithdraw: number;
  status: string;
}
export interface ILST_NFT extends INativeStakedWal {
  address: string;
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
