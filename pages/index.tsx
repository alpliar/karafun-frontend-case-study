import { Center, Divider, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { FaRegClock, FaRegQuestionCircle } from 'react-icons/fa';
import IconWithText from '../components/IconWithText';
import UiLink from '../components/UiLink';
import UiTitle from '../components/UiTitle';

const Home: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);
  const formDuration = 3;

  return (
    <Stack spacing={4}>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex wrap={{ base: 'wrap', md: 'nowrap' }} justify="space-between" gap={2}>
        <IconWithText icon={FaRegQuestionCircle}>{t('home-page:needHelp')}</IconWithText>
        <IconWithText icon={FaRegClock} color="#FB6B4B">
          <strong>±{formDuration}</strong>
          {` `}
          {t('common:minutes', { count: formDuration })}
        </IconWithText>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        <Stack spacing={4}>
          <UiTitle title={t('home-page:title')}>{t('home-page:subtitle')}</UiTitle>
          <Divider maxW={32} borderColor="#FB6B4B" opacity={1} borderBottomWidth={4} />
          <Text whiteSpace="pre-wrap">{t('home-page:descriptionText')}</Text>
          <UiLink href="/form/step/1" asButton>
            {t('common:letsGo')} ➜
          </UiLink>
          <Text opacity="60%">{t('home-page:usuallyCompletesIn', { count: formDuration })}</Text>
        </Stack>
        <Center>
          <Image
            src="/homepage-illustration.webp"
            alt="Illustration of Karafun Business"
            h={{ base: 256, lg: 320 }}
          />
        </Center>
      </SimpleGrid>
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
