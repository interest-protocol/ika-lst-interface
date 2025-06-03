import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

const EmptyStateMessage: FC = () => (
  <Div
    py="2rem"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <P
      mb="1rem"
      fontSize="1rem"
      fontWeight="400"
      color="#FFFFFFB2"
      fontFamily="JetBrains Mono"
    >
      You don’t have any records just yet
    </P>
    <Button
      gap="10px"
      border="none"
      fontSize="1rem"
      color="#FFFFFF"
      height="3.25rem"
      cursor="pointer"
      fontWeight="500"
      whiteSpace="nowrap"
      alignItems="center"
      padding="16px 24px"
      borderRadius="10px"
      display="inline-flex"
      justifyContent="center"
      backgroundColor="#EE2B5B"
      width={['100%', '100%', '8.87rem']}
    >
      Start Staking
    </Button>
  </Div>
);

export default EmptyStateMessage;
