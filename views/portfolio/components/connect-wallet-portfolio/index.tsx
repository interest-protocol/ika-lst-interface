import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import WalletGuardButton from '@/components/wallet-button/wallet-guard-button';

import { ConnectWalletPortfolioProps } from './connect-wallet-portfolio.types';

const ConnectWalletNotice: FC<ConnectWalletPortfolioProps> = ({ title }) => (
  <Div>
    <P fontSize="1rem" color="#FFFFFF" fontWeight="600" marginBottom="1rem">
      {title}
    </P>
    <Div
      width="100%"
      gap="0.75rem"
      bg="#FFFFFF0D"
      display="flex"
      minHeight="192px"
      borderRadius="6px"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      border="1px solid #FFFFFF1A"
    >
      <P color="#FFFFFF" fontFamily="JetBrains Mono">
        Connect Wallet to Unlock Details
      </P>
      <WalletGuardButton
        py="1rem"
        px="1.5rem"
        all="unset"
        bg="#EE2B5B"
        color="#FFFFFF"
        cursor="pointer"
        fontWeight="500"
        textAlign="center"
        position="relative"
        borderRadius="0.625rem"
      />
    </Div>
  </Div>
);

export default ConnectWalletNotice;
