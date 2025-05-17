import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Epoch } from '../stake/components';
import Coins from './components/coins';
import Lst from './components/lst';
import LstNft from './components/lst-nft';
import NativeStakedWal from './components/native-staked-wal';

const PortfolioContent: FC = () => {
  return (
    <Div
      flex="1"
      mx="auto"
      gap="1rem"
      display="flex"
      borderRadius="1rem"
      flexDirection="column"
      px={['0.5rem', '2rem']}
      width={['100%', '53.5rem']}
      my={['1rem', '1rem', '1rem', '1rem', '4rem']}
    >
      <Lst />
      <NativeStakedWal />
      <LstNft />
      <Coins />

      <Epoch />
    </Div>
  );
};
export default PortfolioContent;
