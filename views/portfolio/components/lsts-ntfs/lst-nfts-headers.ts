import { TableHeader } from '../portfolio-table/portfolio-table.types';

export const LST_NFTS_HEADERS: TableHeader[] = [
  { key: 'token', label: 'LST', align: 'left' },
  { key: 'totalStaked', label: 'Total Staked', align: 'center' },
  {
    key: 'toWithdraw',
    label: 'To Withdraw',
    align: 'center',
    format: 'currency',
  },
  { key: 'status', align: 'center', type: 'status' },
  { key: 'action', align: 'center', type: 'button' },
];
