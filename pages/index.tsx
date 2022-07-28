import { Divider, Heading, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

const Home: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);
  return (
    <Stack spacing={4}>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>{t('home-page:needHelp')}</Text>
      <Text>{t('home-page:estimatedDuration', { duration: '3' })}</Text>
      <Heading whiteSpace="pre-wrap">
        {t('home-page:title')}
        {'\n'}
        {t('home-page:subtitle')}
      </Heading>
      <Divider maxW={64} borderColor="orange.600" borderBottomWidth={4} />
      <Text whiteSpace="pre-wrap">{t('home-page:descriptionText')}</Text>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home-page'])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
