import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { LSTNFTsRowProps } from './lsts-row.types';

const LSTNFTsRow: FC<LSTNFTsRowProps> = () => {
  return (
    <Div
      cursor="pointer"
      border="1px solid"
      alignItems="center"
      borderColor="#FFFFFF1A"
      borderRadius="0.625rem"
      p={['1rem', '1rem', '1rem']}
      display={['block', 'block', 'grid']}
      transition="background-color 0.2s ease"
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr 1fr']}
      nHover={{ borderColor: '#FFFFFF33', bg: '#EE2B5B40' }}
    >
      <Div display={['block', 'block', 'none']} width="100%">
        <Div display="flex" alignItems="center" gap="0.5rem" mb="0.75rem"></Div>
      </Div>

      <Div display={['none', 'none', 'contents']}></Div>
    </Div>
  );
};

export default LSTNFTsRow;
