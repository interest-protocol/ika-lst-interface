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
    <P color="#FFFFFF80" fontSize="1rem" marginBottom="1rem">
      You don’t have any records just yet
    </P>
    <Button
      py="0.8rem"
      border="none"
      fontSize="16px"
      fontWeight="500"
      borderRadius="0.5rem"
      display="inline-block"
      color="#FFFFFF"
      px={['1.5rem', '1.25rem', '1rem']}
      backgroundColor="#EE2B5B"
      cursor="pointer"
    >
      Start Staking
    </Button>
  </Div>
);

export default EmptyStateMessage;
