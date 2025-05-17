import BigNumber from 'bignumber.js';

import { SdkPool } from '@/interface';

export interface CoinsRowProps extends SdkPool {
  id: string;
  position?: BigNumber | null;
}

export interface CoinsRowMetadataProps {
  lpCoinType: string;
}

export interface CoinsRowMetricsProps {
  position?: BigNumber | null;
}
