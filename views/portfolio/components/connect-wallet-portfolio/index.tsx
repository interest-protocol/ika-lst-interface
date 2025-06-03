import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import WalletGuardButton from '@/components/wallet-button/wallet-guard-button';

import { IConnectWalletPortfolioProps } from './connect-wallet-portfolio.types';

const ConnectWalletPortfolio: FC<IConnectWalletPortfolioProps> = ({
  title,
}) => (
  <Div>
    <P mb="1rem" color="#FFFFFF" fontSize="1rem" fontWeight="600">
      {title}
    </P>
    <Div
      width="100%"
      gap="0.75rem"
      bg="#FFFFFF0D"
      display="flex"
      minHeight="12rem"
      borderRadius="6px"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      border="1px solid #FFFFFF1A"
    >
      <P
        fontWeight="400"
        color="#FFFFFFB2"
        fontSize="1rem"
        fontFamily="JetBrains Mono"
      >
        Connect Wallet to Unlock Details
      </P>
      <WalletGuardButton
        gap="10px"
        all="unset"
        bg="#EE2B5B"
        display="flex"
        color="#F1F1F1"
        fontSize="1rem"
        fontWeight="500"
        cursor="pointer"
        borderRadius="10px"
        alignItems="center"
        whiteSpace="nowrap"
        padding="1rem 1.5rem"
        px={['24px', '24px']}
        justifyContent="center"
        width={['100%', '8.25rem']}
      />
    </Div>
  </Div>
);

export default ConnectWalletPortfolio;
