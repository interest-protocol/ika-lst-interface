import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import CoinsHeader from '../coins-header';
import CoinsRow from '../coins-row';
import { COINS } from './coins.data';

const CoinsTable: FC = () => (
  <Div gap="1rem" display="flex" flexDirection="column">
    <CoinsHeader totalValue={381.242324202} />
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
        gridTemplateColumns="1fr 1fr 1fr 1fr"
      >
        <P color="#FFFFFF80" fontSize="0.875rem" fontFamily="JetBrains Mono">
          Coins
        </P>
        <P
          color="#FFFFFF80"
          textAlign="center"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          Balance
        </P>
        <P
          color="#FFFFFF80"
          textAlign="center"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          Price
        </P>
        <P
          color="#FFFFFF80"
          textAlign="center"
          fontSize="0.875rem"
          fontFamily="JetBrains Mono"
        >
          Value
        </P>
      </Div>

      <Div gap="0.5rem" display="flex" flexDirection="column">
        {COINS.map((token) => (
          <CoinsRow key={unikey()} {...token} />
        ))}
      </Div>
    </Div>
  </Div>
);

export default CoinsTable;
