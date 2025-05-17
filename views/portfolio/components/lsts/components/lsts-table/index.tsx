import { POOLS } from '@interest-protocol/interest-stable-swap-sdk';
import { normalizeStructTag } from '@mysten/sui/utils';
import { Div, P } from '@stylin.js/elements';
import { toPairs } from 'ramda';
import { FC, useMemo } from 'react';
import unikey from 'unikey';

import { useAppState } from '@/hooks/use-app-state';
import { useTabState } from '@/hooks/use-tab-manager';

import LSTsRow from '../lsts-row';

const LSTsTable: FC = () => {
  const { tab } = useTabState();
  const { balances } = useAppState();

  const pools = useMemo(
    () =>
      toPairs(POOLS).filter(([, { lpCoinType }]) => {
        const isMyPosition = !!tab;

        if (!isMyPosition) return true;

        const hasLPToken =
          balances[normalizeStructTag(lpCoinType)] &&
          !balances[normalizeStructTag(lpCoinType)].isZero();

        return hasLPToken;
      }),
    [tab, balances]
  );

  return (
    <Div
      p="1rem"
      bg="#FFFFFF0D"
      display="flex"
      overflowX="auto"
      border="1px solid"
      borderRadius="1rem"
      alignItems="stretch"
      flexDirection="column"
      borderColor="#FFFFFF1A"
      gap={['0.5rem', '1rem']}
    >
      <Div
        px="1rem"
        display="grid"
        color="#FFFFFF80"
        fontSize="0.875rem"
        gap={['0.25rem', 'unset']}
        gridTemplateColumns="1fr 1fr 1fr 1fr"
      >
        <Div gap="0.25rem" display={['none', 'flex']} alignItems="center">
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            Coins
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            Balance
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            Price
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            Value
          </P>
        </Div>
      </Div>
      <Div>
        {pools.length === 0 ? (
          <Div
            py="2rem"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <P color="#FFFFFF80" fontSize="1rem">
              No lsts found.
            </P>
          </Div>
        ) : (
          pools.map(([key, pool]) => (
            <LSTsRow
              {...pool}
              id={key}
              key={unikey()}
              position={
                tab ? balances[normalizeStructTag(pool.lpCoinType)] : null
              }
            />
          ))
        )}
      </Div>
    </Div>
  );
};

export default LSTsTable;
