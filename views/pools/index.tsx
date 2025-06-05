import { Div, Input, Label, P } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Layout } from '@/components';
import { useTabState } from '@/hooks/use-tab-manager';

import { LiquidityPools, PoolsPerformance } from './components';
import PoolsSearch from './components/pools-search';
import PoolsTable from './components/pools-table';
import PoolsTabs from './components/pools-tabs';

const Pools: FC = () => {
  const form = useForm({ defaultValues: { search: '', hideClosed: false } });
  const { tab, setTab } = useTabState();

  useEffect(() => {
    setTab(0);
  }, []);

  return (
    <Layout>
      <FormProvider {...form}>
        <Div
          flex="1"
          mx="auto"
          gap="1rem"
          width="100%"
          display="flex"
          borderRadius="1rem"
          flexDirection="column"
          px={['0.5rem', '2rem']}
          maxWidth={['100%', '51.5rem']}
          my={['1rem', '1rem', '1rem', '1rem', '3rem']}
        >
          <Div
            width="100%"
            display="grid"
            color="#FFFFFF80"
            fontSize="0.875rem"
            gap={['0.5rem', '1rem']}
            gridTemplateColumns={['1fr', '1fr', '1fr 3fr']}
          >
            <LiquidityPools />
            <PoolsPerformance />
          </Div>
          <Div
            width="100%"
            display="flex"
            gap={['0.5rem', '1rem']}
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems={['stretch', 'center']}
          >
            <PoolsTabs />
            <Div
              display="flex"
              gap="1rem"
              alignItems="center"
              whiteSpace="nowrap"
            >
              {tab === 1 && (
                <Label
                  display="flex"
                  alignItems="center"
                  gap="0.5rem"
                  cursor="pointer"
                >
                  <P color="#FFFFFF80" fontSize="0.875rem">
                    Hide Closed
                  </P>
                  <Div
                    width="2.75rem"
                    height="1.5rem"
                    bg={form.watch('hideClosed') ? '#EE2B5B' : '#0000004D'}
                    border="1px solid"
                    borderColor="#EE2B5B66"
                    borderRadius="0.75rem"
                    position="relative"
                    transition="all 0.3s ease"
                  >
                    <Input
                      type="checkbox"
                      id="hide-closed"
                      {...form.register('hideClosed')}
                      display="none"
                    />
                    <Div
                      width="1.25rem"
                      height="1.25rem"
                      bg="#FFFFFF"
                      borderRadius="50%"
                      position="absolute"
                      top="0.125rem"
                      left={form.watch('hideClosed') ? '1.375rem' : '0.125rem'}
                      transition="all 0.3s ease"
                    />
                  </Div>
                </Label>
              )}
              <PoolsSearch />
            </Div>
          </Div>
          <PoolsTable />
        </Div>
      </FormProvider>
    </Layout>
  );
};

export default Pools;
