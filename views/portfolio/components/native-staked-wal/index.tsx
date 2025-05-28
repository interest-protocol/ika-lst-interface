import { useCurrentAccount } from '@mysten/dapp-kit';
import { FC } from 'react';

import ConnectWalletPortolio from '../connect-wallet-portfolio';
import PortfolioTable from '../portfolio-table';
import { NATIVE_STALKED_WAL } from './native-staked-wal.data';
import { NATIVE_STAKED_WAL_HEADERS } from './native-staked-wal-headers';

const NativeStakedWal: FC = () => {
  const currentAccount = useCurrentAccount();

  if (!currentAccount)
    return <ConnectWalletPortolio title="Native StakedWAL" />;

  return (
    <PortfolioTable
      totalTokens="30"
      tableType="staked"
      title="Native StakedWAL"
      data={NATIVE_STALKED_WAL}
      totalValue={381.242324202}
      headers={NATIVE_STAKED_WAL_HEADERS}
    />
  );
};

export default NativeStakedWal;
