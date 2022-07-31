import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const LocaleToggle: React.FC = ({}) => {
  const router = useRouter();
  return (
    <>
      {router.locales?.map((locale) => {
        return (
          <NextLink key={locale} href={router.asPath} passHref locale={locale}>
            <Link fontWeight={router.locale === locale ? 'bold' : undefined}>{locale}</Link>
          </NextLink>
        );
      })}
    </>
  );
};

export default LocaleToggle;
