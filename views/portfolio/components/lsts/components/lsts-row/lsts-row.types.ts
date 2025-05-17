import BigNumber from 'bignumber.js';

import { SdkPool } from '@/interface';

export interface LSTsRowProps extends SdkPool {
  id: string;
  position?: BigNumber | null;
}

export interface LSTsRowMetadataProps {
  lpCoinType: string;
}

export interface LSTsRowMetricsProps {
  position?: BigNumber | null;
}
