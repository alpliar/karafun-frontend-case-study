import { Button, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

const Home: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);
  return (
    <Stack as="header" spacing={4}>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>{t('home-page:needHelp')}</Text>
      <Text>{t('home-page:estimatedDuration', { duration: '3' })}</Text>
      <Heading fontSize="5xl" lineHeight="1em" fontWeight="bold" whiteSpace="pre-wrap">
        <Text as="span" color="mediumblue">
          {t('home-page:title')}
        </Text>
        {'\n'}
        <Text as="span">{t('home-page:subtitle')}</Text>
      </Heading>
      <Divider maxW={64} borderColor="darkorange" borderBottomWidth={4} />
      <Text whiteSpace="pre-wrap">{t('home-page:descriptionText')}</Text>
      <Button colorScheme="facebook" rounded="full" maxW="3xs">
        {t('common:letsGo')} ➜
      </Button>
      <Text opacity="60%">{t('home-page:usuallyCompletesIn', { minutes: 3 })}</Text>
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
