import { useCurrentAccount } from '@mysten/dapp-kit';
import { FC } from 'react';

import ConnectWalletPortolio from '../connect-wallet-portfolio';
import PortfolioTable from '../portfolio-table';
import { LSTS } from './lsts.data';
import { LSTS_HEADERS } from './lsts-headers';

const LSTs: FC = () => {
  const currentAccount = useCurrentAccount();

  if (!currentAccount) return <ConnectWalletPortolio title="LSTs" />;

  return (
    <PortfolioTable
      data={LSTS}
      title="LSTs"
      totalTokens="32"
      tableType="basic"
      headers={LSTS_HEADERS}
      totalValue={381.242324202}
    />
  );
};

export default LSTs;
