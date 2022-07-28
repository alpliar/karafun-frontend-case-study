import { Heading, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

const Home: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);
  return (
    <Stack>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>{t('home-page:needHelp')}</Text>
      <Text>{t('home-page:estimatedDuration', { duration: '3' })}</Text>
      <Heading>{t('home-page:h1')}</Heading>
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
