import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { NativeStakedWalRowProps } from './native-staked-wal-row.types';
import NativeStakedWalRowMetadata from './native-staked-wal-row-metadata';
import NativeStakedWalRowMetrics from './native-staked-wal-row-metrics';

const NativeStakedWalRow: FC<Omit<NativeStakedWalRowProps, 'objectId'>> = ({
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
      <NativeStakedWalRowMetadata lpCoinType={lpCoinType} />
      <NativeStakedWalRowMetrics position={position} />
    </Div>
  </Link>
);

export default NativeStakedWalRow;
