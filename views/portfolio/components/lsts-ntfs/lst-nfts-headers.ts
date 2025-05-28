import { ITableHeader } from '../portfolio-table/portfolio-table.types';

export const LST_NFTS_HEADERS: ReadonlyArray<ITableHeader> = [
  {
    key: 'token',
    label: 'LST',
    align: 'left',
  },
  {
    key: 'totalStaked',
    label: 'Total Staked',
    align: 'center',
  },
  {
    key: 'toWithdraw',
    label: 'To Withdraw',
    align: 'center',
    format: 'currency',
  },
];
