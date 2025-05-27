import { useCurrentAccount } from '@mysten/dapp-kit';
import { FC } from 'react';

import ConnectWalletNotice from '../connect-wallet-portfolio';
import PortfolioTable from '../portfolio-table';
import { COINS } from './coins.data';
import { COINS_HEADERS } from './coins-headers';

const Coins: FC = () => {
  const currentAccount = useCurrentAccount();

  if (!currentAccount) {
    return <ConnectWalletNotice title="Coins" />;
  }

  return (
    <PortfolioTable
      title="Coins"
      headers={COINS_HEADERS}
      data={COINS}
      totalValue={381.242324202}
      tableType="basic"
    />
  );
};

export default Coins;
