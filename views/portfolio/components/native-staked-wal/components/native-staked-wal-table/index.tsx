import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import NativeStakedWalHeader from '../lst-nfts-header';
import NativeStakedWalRow from '../native-staked-wal-row';
import { NATIVE_STALKEDWAL } from './native-stalked-wal.data';

const NativeStakedWalTable: FC = () => (
  <Div gap="1rem" display="flex" flexDirection="column">
    <NativeStakedWalHeader totalTokens="32" totalValue={381.242324202} />
    <Div
      bg="#121212"
      display="flex"
      border="1px solid"
      borderRadius="1rem"
      flexDirection="column"
      p={['0.75rem', '1rem']}
      borderColor="#FFFFFF1A"
      gap={['1rem', '1rem', '0.5rem']}
    >
      <Div
        px="1rem"
        pb="0.5rem"
        display={['none', 'none', 'grid']}
        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
      >
        <P color="#FFFFFF80" fontSize="0.875rem" fontFamily="JetBrains Mono">
          LST
        </P>
        <P
          color="#FFFFFF80"
          textAlign="center"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          Total Staked
        </P>
        <P
          color="#FFFFFF80"
          textAlign="center"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          To Withdraw
        </P>
      </Div>

      <Div gap="0.5rem" display="flex" flexDirection="column">
        {NATIVE_STALKEDWAL.map((token) => (
          <NativeStakedWalRow key={unikey()} {...token} />
        ))}
      </Div>
    </Div>
  </Div>
);

export default NativeStakedWalTable;
