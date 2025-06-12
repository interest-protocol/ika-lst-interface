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
          mx="auto"
          width="100%"
          gap="2rem"
          display="flex"
          maxWidth="53.5rem"
          my={['1rem', '3rem']}
          flexDirection="column"
          px={['0.5rem', '2rem']}
        >
          <Div
            gap="1rem"
            display="flex"
            justifyContent="space-between"
            width={['100%', '100%', '100%', '53.5rem']}
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <Div flexShrink="0" width={['100%', '100%', '100%', '16.4375rem']}>
              <LiquidityPools />
            </Div>
            <Div width={['100%', '100%', '100%', '36.0625rem']}>
              <PoolsPerformance />
            </Div>
          </Div>

          <Div
            gap="1rem"
            display="flex"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems={['stretch', 'center']}
            width={['100%', '100%', '100%', '53.5rem']}
          >
            <PoolsTabs />
            <Div
              gap="1rem"
              display="flex"
              alignItems="center"
              whiteSpace="nowrap"
            >
              {tab === 1 && (
                <Label
                  gap="0.5rem"
                  display="flex"
                  cursor="pointer"
                  alignItems="center"
                >
                  <P color="#FFFFFF" fontSize="0.875rem">
                    Hide Closed
                  </P>
                  <Div
                    width="2.75rem"
                    height="1.5rem"
                    border="1px solid"
                    position="relative"
                    borderRadius="0.75rem"
                    borderColor="#EE2B5B66"
                    transition="all 0.3s ease"
                    bg={form.watch('hideClosed') ? '#EE2B5B' : '#0000004D'}
                  >
                    <Input
                      type="checkbox"
                      display="none"
                      id="hide-closed"
                      {...form.register('hideClosed')}
                    />
                    <Div
                      top="0.1rem"
                      bg="#FFFFFF"
                      width="1.25rem"
                      height="1.25rem"
                      borderRadius="50%"
                      position="absolute"
                      transition="all 0.3s ease"
                      left={form.watch('hideClosed') ? '1.3rem' : '0.125rem'}
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
