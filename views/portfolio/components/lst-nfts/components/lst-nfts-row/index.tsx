import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { LSTNFTsRowProps } from './lst-nfts-row.types';
import LSTNFTsRowMetadata from './lst-nfts-row-metadata';
import LSTNFTsRowMetrics from './lst-nfts-row-metrics';

const LSTNFTsRow: FC<Omit<LSTNFTsRowProps, 'objectId'>> = ({
  id,
  position,
  lpCoinType,
}) => (
  <Link href={`${Routes[RoutesEnum.Pools]}/${id}`} shallow>
    <Div
      p="1rem"
      color="#ffffff"
      border="1px solid"
      fontSize="0.875rem"
      alignItems="center"
      borderColor="#FFFFFF1A"
      borderRadius="0.625rem"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      transition="background-color 0.2s ease"
      nHover={{ borderColor: '#EE2B5BD', bg: '#EE2B5B33' }}
    >
      <LSTNFTsRowMetadata lpCoinType={lpCoinType} />
      <LSTNFTsRowMetrics position={position} />
    </Div>
  </Link>
);

export default LSTNFTsRow;
