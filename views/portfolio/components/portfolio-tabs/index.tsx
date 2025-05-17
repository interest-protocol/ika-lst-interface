import { values } from 'ramda';
import { FC, useMemo } from 'react';

import { Tabs } from '@/components';
import { useAppState } from '@/hooks/use-app-state';
import useEpochData from '@/hooks/use-epoch-data';
import { useTabState } from '@/hooks/use-tab-manager';

const PortfolioTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const { data: epochData } = useEpochData();
  const { objectsActivation } = useAppState();

  const objectsToActivate = useMemo(
    () =>
      values(objectsActivation).filter(
        (activationEpoch) =>
          epochData && activationEpoch <= epochData.currentEpoch
      ).length,
    [objectsActivation, epochData]
  );

  const tabs = [
    'LSTs',
    'Native StakedWal',
    'LST NFTs',
    `Coins ${objectsToActivate ? `(${objectsToActivate})` : ''}`,
  ];

  return <Tabs tabs={tabs} setTab={setTab} tab={tab} />;
};

export default PortfolioTabs;
