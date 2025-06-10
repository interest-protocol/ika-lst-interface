import { ITableHeader } from '../../portfolio-table.types';
import { IPortfolioTableRowMetadataProps } from './portfolio-table-row-metadata.types';
export interface IPortfolioTableRowProps
  extends IPortfolioTableRowMetadataProps {
  headers: ReadonlyArray<ITableHeader>;
  onClick?: () => void;
}
