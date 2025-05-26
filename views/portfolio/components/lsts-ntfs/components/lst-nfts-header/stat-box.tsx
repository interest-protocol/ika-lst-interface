import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { StatBoxProps } from './stat-box.types';

const StatBox: FC<StatBoxProps> = ({ children }) => (
  <Div
    borderRadius="8px"
    px={['0.5rem', '0.75rem']}
    py={['0.25rem', '0.375rem']}
    border="1px solid #EE2B5B66"
  >
    <Span
      color="#FFFFFF"
      fontWeight="500"
      fontFamily="JetBrains Mono"
      fontSize={['0.875rem', '1rem']}
    >
      {children}
    </Span>
  </Div>
);

export default StatBox;
