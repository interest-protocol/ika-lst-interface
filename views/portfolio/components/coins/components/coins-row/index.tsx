import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { CoinsRowProps } from './coins-row.types';
import CoinsRowMetadata from './coins-row-metadata';
import CoinsRowMetrics from './coins-row-metrics';

const CoinsRow: FC<Omit<CoinsRowProps, 'objectId'>> = ({
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
      <CoinsRowMetadata lpCoinType={lpCoinType} />
      <CoinsRowMetrics position={position} />
    </Div>
  </Link>
);

export default CoinsRow;
