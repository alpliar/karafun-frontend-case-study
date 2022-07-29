import { Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import UiLink from '../components/UiLink';

const Home: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);
  return (
    <Stack spacing={4}>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex wrap={{ base: 'wrap', md: 'nowrap' }} justify="space-between" gap={2}>
        <Text color="youpi">{t('home-page:needHelp')}</Text>
        <Text>{t('home-page:estimatedDuration', { duration: '3' })}</Text>
      </Flex>
      <Heading
        fontSize="5xl"
        lineHeight={{ base: '1em', md: '1.25em' }}
        fontWeight="bold"
        whiteSpace="pre-wrap"
      >
        <Text as="span" color="#4F52FE">
          {t('home-page:title')}
        </Text>
        {'\n'}
        <Text as="span">{t('home-page:subtitle')}</Text>
      </Heading>
      <Divider maxW={32} borderColor="#FB6B4B" opacity={1} borderBottomWidth={4} />
      <Text whiteSpace="pre-wrap">{t('home-page:descriptionText')}</Text>
      <UiLink href="/form" asButton>
        {t('common:letsGo')} ➜
      </UiLink>
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
