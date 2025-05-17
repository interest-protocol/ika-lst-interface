import BigNumber from 'bignumber.js';

import { SdkPool } from '@/interface';

export interface NativeStakedWalRowProps extends SdkPool {
  id: string;
  position?: BigNumber | null;
}

export interface NativeStakedWalRowMetadataProps {
  lpCoinType: string;
}

export interface NativeStakedWalRowMetricsProps {
  position?: BigNumber | null;
}
