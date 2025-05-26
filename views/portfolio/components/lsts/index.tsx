import { FC } from 'react';

import LSTsTable from './components/lsts-table';

const LSTs: FC = () => {
  return (
    <>
      {/* <Div
        width="100%"
        minHeight="192px"
        bg="#FFFFFF0D"
        border="1px solid #FFFFFF1A"
        borderRadius="6px"
        display="flex"
        flexDirection="column"
        gap="0.75rem"
        justifyContent="center"
        alignItems="center"
      >
        <P color="#FFFFFF" fontFamily="JetBrains Mono">
          Connect Wallet to Unlock Details
        </P>
        <WalletGuardButton
          all="unset"
          py="1rem"
          px="1.5rem"
          color="#FFFFFF"
          fontWeight="500"
          textAlign="center"
          position="relative"
          borderRadius="0.625rem"
          cursor={'pointer'}
          bg={'#EE2B5B'}
        />
      </Div> */}
      <LSTsTable />
    </>
  );
};

export default LSTs;
