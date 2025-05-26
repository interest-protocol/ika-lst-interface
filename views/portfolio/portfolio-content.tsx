import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { useTabState } from '@/hooks/use-tab-manager';

import { Epoch } from '../stake/components';
import Coins from './components/coins';
import LSTs from './components/lsts';
import LSTNFTs from './components/lsts-ntfs';
import NativeStakedWal from './components/native-staked-wal';
import PortfolioTabs from './components/portfolio-tabs';

const PortfolioContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div
      flex="1"
      mx="auto"
      gap="1rem"
      display="flex"
      borderRadius="1rem"
      flexDirection="column"
      px={['1.1rem', '2rem']}
      width={['100%', '100%', '100%', '53.5rem']}
      my={['1rem', '1rem', '1rem', '1rem', '3rem']}
    >
      <PortfolioTabs />
      {
        [
          <LSTs key={unikey()} />,
          <NativeStakedWal key={unikey()} />,
          <LSTNFTs key={unikey()} />,
          <Coins key={unikey()} />,
        ][tab]
      }
      <Epoch />
    </Div>
  );
};
export default PortfolioContent;
