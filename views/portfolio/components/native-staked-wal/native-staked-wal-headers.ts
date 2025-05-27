import { ITableHeader } from '../portfolio-table/portfolio-table.types';

export const NATIVE_STAKED_WAL_HEADERS: ReadonlyArray<ITableHeader> = [
  { key: 'symbol', label: 'LST', align: 'left' },
  { key: 'totalStaked', label: 'Total Staked', align: 'center' },
  {
    key: 'toWithdraw',
    label: 'To Withdraw',
    align: 'center',
    format: 'currency',
  },
  { key: 'status', label: 'Status', align: 'center', type: 'status' },
];
