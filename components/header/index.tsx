import { Div, Header as HTMLHeader } from '@stylin.js/elements';
import { FC } from 'react';

import Settings from '../settings';
import Logo from '../svg/logo';
import MobileLogo from '../svg/mobile-logo';
import WalletButton from '../wallet-button';
import HeaderTVL from './header-tvl';
import Navbar from './navbar';

const Header: FC = () => (
  <HTMLHeader
    p="1rem"
    mx="auto"
    width="100%"
    display="flex"
    maxWidth="1440px"
    position="relative"
    alignItems="center"
    justifyContent="space-between"
  >
    <Div display="flex" alignItems="center" gap={['0.5rem', '1rem', '2rem']}>
      <Div gap="1rem" display="flex" alignItems="center">
        <Div display={['block', 'none']}>
          <MobileLogo maxWidth="32" maxHeight="32" />
        </Div>
        <Div display={['none', 'block']}>
          <Logo maxWidth="104" maxHeight="52" />
        </Div>
      </Div>
      <Navbar />
    </Div>
    <Div display="flex" gap={['0.5rem', '1rem']} alignItems="center">
      <HeaderTVL />
      <WalletButton />
      <Settings />
    </Div>
  </HTMLHeader>
);

export default Header;
