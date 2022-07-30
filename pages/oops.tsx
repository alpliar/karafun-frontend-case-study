import { Flex, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import UiLink from '../components/UiLink';
import UiTitle from '../components/UiTitle';

const OopsPage: NextPage = () => {
  const { t } = useTranslation(['home-page', 'common']);

  return (
    <Stack mt={8} spacing={4}>
      <UiTitle title={t('oops:title')}>{t('oops:subtitle')}</UiTitle>
      <Text whiteSpace="pre-wrap">{t('oops:descriptionText')}</Text>
      <Flex wrap={{ base: 'wrap', md: 'nowrap' }} gap={{ base: 1, md: 4 }}>
        <UiLink href="https://www.karafun.fr/pro/" asButton>
          {t('oops:visitKarafunPro')}
        </UiLink>
        <UiLink href="/" asButton variant="text" color="#FB6B4B">
          {t('oops:readMore')}
        </UiLink>
      </Flex>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'oops'])),
      // Will be passed to the page component as props
    },
  };
};

export default OopsPage;
