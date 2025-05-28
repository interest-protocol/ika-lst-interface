import { useCurrentAccount } from '@mysten/dapp-kit';
import { FC } from 'react';

import ConnectWalletPortolio from '../connect-wallet-portfolio';
import PortfolioTable from '../portfolio-table';
import { LST_NFTS } from './lst-nfts.data';
import { LST_NFTS_HEADERS } from './lst-nfts-headers';

const LSTNFTs: FC = () => {
  const currentAccount = useCurrentAccount();

  if (!currentAccount) return <ConnectWalletPortolio title="LST NFTs" />;

  return (
    <PortfolioTable
      tableType="nft"
      title="LST NFTs"
      totalTokens="30"
      data={LST_NFTS}
      headers={LST_NFTS_HEADERS}
      totalValue={381.242324202}
    />
  );
};

export default LSTNFTs;
