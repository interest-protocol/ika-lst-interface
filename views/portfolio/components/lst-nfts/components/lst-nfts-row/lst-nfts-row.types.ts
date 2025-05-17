import BigNumber from 'bignumber.js';

import { SdkPool } from '@/interface';

export interface LSTNFTsRowProps extends SdkPool {
  id: string;
  position?: BigNumber | null;
}

export interface LSTNFTsRowMetadataProps {
  lpCoinType: string;
}

export interface LSTNFTsRowMetricsProps {
  position?: BigNumber | null;
}
