import { ILST, ILST_NFT, INativeStakedWal } from '../../portfolio-table.types';
export interface IPortfolioTableRowMetadataProps {
  data: ILST | ILST_NFT | INativeStakedWal;
  tableType?: 'basic' | 'staked' | 'nft';
}
