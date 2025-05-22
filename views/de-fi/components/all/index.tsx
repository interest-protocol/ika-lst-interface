import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { LENDING_OPTIONS as LENDINGOPTIONS } from '@/constants/lending-options';

import LendingCard from './components/lending-card';

const All: FC = () => (
  <Div
    flex="1"
    mx="auto"
    gap="1rem"
    width="100%"
    display="flex"
    flexDirection="column"
    my={['1rem', '1rem', '1rem', '1rem', '3rem']}
  >
    <Div gap="1rem" width="100%" display="flex" flexDirection="column">
      {LENDINGOPTIONS.map((option) => (
        <LendingCard key={unikey()} {...option} />
      ))}
    </Div>
  </Div>
);

export default All;
