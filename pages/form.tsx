import { Button, createStandaloneToast, Flex, Progress, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FormAnswers from '../components/FormAnswers';
import FormFields from '../components/FormFields';
import UiTitle from '../components/UiTitle';
import formSteps from '../mocks/formSteps.mock';

const FormPage: NextPage = () => {
  const { t } = useTranslation(['form', 'common']);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  const { toast } = createStandaloneToast();
  const router = useRouter();

  const handleSubmit = () => {
    if (formSteps[currentStep].isFinalStep) {
      toast({
        title: 'Request submitted.',
        description: `We'll be back asap with a cost estimate`,
        status: 'success',
        isClosable: true,
      });
      router.push('/');
    } else {
      const isValidAnswer: boolean = formSteps[currentStep].answers.some(
        ({ value, isValidAnswer }) => value === answer && isValidAnswer
      );
      if (!isValidAnswer) {
        router.push('/oops');
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleAnswer = (value: string) => {
    setAnswer(value);
  };

  return (
    <Stack spacing={10}>
      <Flex wrap={{ base: 'wrap', sm: 'nowrap' }} align="center" justify="center" gap={4}>
        <Progress
          colorScheme="orange"
          rounded="md"
          value={formSteps[currentStep].progression}
          width="full"
        />
        <Text whiteSpace="nowrap">{formSteps[currentStep].progression}% completed</Text>
      </Flex>
      <UiTitle title={t(formSteps[currentStep].pretitle)}>{t(formSteps[currentStep].title)}</UiTitle>

      {formSteps[currentStep].answers.length > 0 && (
        <FormAnswers answers={formSteps[currentStep].answers} onChange={handleAnswer} />
      )}

      {formSteps[currentStep].fields.length > 0 && <FormFields fields={formSteps[currentStep].fields} />}

      <Button onClick={handleSubmit} colorScheme="facebook" rounded="full" maxW={{ sm: 32 }}>
        {t(formSteps[currentStep].submitLabel)}
      </Button>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'form'])),
      // Will be passed to the page component as props
    },
  };
};

export default FormPage;
