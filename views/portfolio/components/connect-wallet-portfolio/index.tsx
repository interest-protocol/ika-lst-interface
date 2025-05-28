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
      <P color="#FFFFFF" fontFamily="JetBrains Mono">
        Connect Wallet to Unlock Details
      </P>
      <WalletGuardButton
        all="unset"
        bg="#EE2B5B"
        py="0.75rem"
        gap="0.5rem"
        display="flex"
        color="#F1F1F1"
        fontSize="1rem"
        fontWeight="500"
        cursor="pointer"
        alignItems="center"
        borderRadius="0.75rem"
        px={['0.75rem', '1rem']}
      />
    </Div>
  </Div>
);

export default ConnectWalletPortfolio;
