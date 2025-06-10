import { POOLS } from '@interest-protocol/interest-stable-swap-sdk';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { normalizeStructTag } from '@mysten/sui/utils';
import { Div, P } from '@stylin.js/elements';
import { toPairs } from 'ramda';
import { FC, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import WalletGuardButton from '@/components/wallet-button/wallet-guard-button';
import { useAppState } from '@/hooks/use-app-state';
import { useTabState } from '@/hooks/use-tab-manager';

import PoolRow from '../pool-row';

const PoolsTable: FC = () => {
  const { tab } = useTabState();
  const { balances } = useAppState();
  const { control } = useFormContext();
  const search = useWatch({ control, name: 'search' });
  const hideClosed = useWatch({ control, name: 'hideClosed' });
  const currentAccount = useCurrentAccount();

  const pools = useMemo(
    () =>
      toPairs(POOLS).filter(([, { lpCoinType, coinTypes }]) => {
        const normalizedSearch = search.trim().toLowerCase();

        if (normalizedSearch) {
          const foundLPToken = lpCoinType
            ?.toLowerCase()
            .includes(normalizedSearch);
          const foundAnyToken = coinTypes?.some((ct: string) =>
            ct.toLowerCase().includes(normalizedSearch)
          );

          const foundToken = foundLPToken || foundAnyToken;

          if (!foundToken) return false;
        }

        const isMyPosition = tab === 1;

        if (!isMyPosition) return true;

        const hasLPToken =
          balances[normalizeStructTag(lpCoinType)] &&
          !balances[normalizeStructTag(lpCoinType)].isZero();

        if (hideClosed) return hasLPToken;

        return true;
      }),
    [tab, balances, search, hideClosed]
  );

  if (tab === 1 && !currentAccount) {
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
          width="100%"
          gap="1rem"
          display="flex"
          minHeight="12rem"
          borderRadius="6px"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <P
            fontSize="1rem"
            fontWeight="400"
            color="#FFFFFFB2"
            fontFamily="JetBrains Mono"
          >
            Connect Wallet to Unlock Details
          </P>
          <WalletGuardButton
            gap="10px"
            all="unset"
            bg="#EE2B5B"
            display="flex"
            color="#000000"
            fontSize="1rem"
            fontWeight="500"
            cursor="pointer"
            borderRadius="10px"
            alignItems="center"
            whiteSpace="nowrap"
            padding="1rem 1.5rem"
            justifyContent="center"
            width={['100%', '10.25rem']}
          />
        </Div>
      </Div>
    );
  }

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
        gridTemplateColumns={['1fr 1fr', '2fr repeat(5, 1fr) 43px']}
      >
        <Div gap="0.25rem" display={['none', 'flex']} alignItems="center">
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            Pool
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            TVL
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            APR
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            1D Vol
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            30D Vol
          </P>
        </Div>
        <Div
          gap="0.25rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'flex']}
        >
          <P fontFamily="JetBrains Mono" whiteSpace="nowrap">
            1D Vol/TVL
          </P>
        </Div>
      </Div>
      <Div>
        {pools.length === 0 ? (
          <Div
            py="2rem"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <P
              fontSize="1rem"
              fontWeight="400"
              color="#FFFFFF80"
              fontFamily="JetBrains Mono"
            >
              {tab === 1 ? 'No results.' : 'No result found for “ search “'}
            </P>
          </Div>
        ) : (
          pools.map(([key, pool]) => (
            <PoolRow
              {...pool}
              id={key}
              key={unikey()}
              position={
                tab === 1 ? balances[normalizeStructTag(pool.lpCoinType)] : null
              }
            />
          ))
        )}
      </Div>
    </Div>
  );
};

export default PoolsTable;
