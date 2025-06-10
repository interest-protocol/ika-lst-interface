import { FC } from 'react';

import { Tabs } from '@/components';
import { useTabState } from '@/hooks/use-tab-manager';

const PortfolioTabs: FC = () => {
  const { tab, setTab } = useTabState();

  const tabs = ['LSTs', 'Native StakedWal', 'LST NFTs', 'Coins'];

  return <Tabs tabs={tabs} setTab={setTab} tab={tab} />;
};

export default PortfolioTabs;
