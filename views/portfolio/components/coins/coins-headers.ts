import { ITableHeader } from '../portfolio-table/portfolio-table.types';

export const COINS_HEADERS: ReadonlyArray<ITableHeader> = [
  { key: 'symbol', label: 'Coins', align: 'left' },
  { key: 'balance', label: 'Balance', align: 'center' },
  { key: 'price', label: 'Price', align: 'center', format: 'currency' },
  { key: 'value', label: 'Value', align: 'center', format: 'currency' },
];
