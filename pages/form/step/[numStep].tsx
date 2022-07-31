import { Button, createStandaloneToast, Flex, Progress, Stack, Text } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FormAnswers from '../../../components/FormAnswers';
import FormFields from '../../../components/FormFields';
import UiTitle from '../../../components/UiTitle';
import formSteps from '../../../mocks/formSteps.mock';
import { IFormStep } from '../../../models/form.model';

interface IFormStepPageProps {
  stepNumber: string;
  step: IFormStep;
}

const FormStepPage: NextPage<IFormStepPageProps> = ({ step, stepNumber }) => {
  const { t } = useTranslation(['form', 'common']);
  const [answer, setAnswer] = useState<string>('');
  const { toast } = createStandaloneToast();
  const router = useRouter();

  const handleSubmit = () => {
    if (step.isFinalStep) {
      toast({
        title: 'Request submitted.',
        description: `We'll be back asap with a cost estimate`,
        status: 'success',
        isClosable: true,
      });
      router.push('/');
    } else {
      const isValidAnswer: boolean = step.answers.some(
        ({ value, isValidAnswer }) => value === answer && isValidAnswer
      );
      if (!isValidAnswer) {
        router.push('/oops');
      } else {
        router.push(`/form/step/${parseInt(stepNumber) + 1}`);
      }
    }
  };

  const handleAnswer = (value: string) => {
    setAnswer(value);
  };

  return (
    <Stack spacing={10}>
      <Flex wrap={{ base: 'wrap', sm: 'nowrap' }} align="center" justify="center" gap={4}>
        <Progress colorScheme="orange" rounded="md" value={step.progression} width="full" />
        <Text whiteSpace="nowrap">{step.progression}% completed</Text>
      </Flex>
      <UiTitle title={t(step.pretitle as string)}>{t(step.title)}</UiTitle>

      {step.answers.length > 0 && <FormAnswers answers={step.answers} onChange={handleAnswer} />}

      {step.fields.length > 0 && <FormFields fields={step.fields} />}

      <Button onClick={handleSubmit} colorScheme="facebook" rounded="full" maxW={{ sm: 32 }}>
        {t(step.submitLabel)}
      </Button>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  try {
    const stepNumber = params?.numStep;

    if (typeof stepNumber !== 'string') throw new Error('stepNumber must be a string');

    const step = formSteps.find(({ id }) => id === parseInt(stepNumber));

    if (!step) throw new Error('Step not found');

    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['common', 'form'])),
        stepNumber,
        step,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

export default FormStepPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = formSteps.map((step) => {
    return {
      params: {
        numStep: step.id.toString(),
      },
    };
  });

  return {
    paths: [
      ...paths.map((path) => ({ ...path, locale: 'en' })),
      ...paths.map((path) => ({ ...path, locale: 'fr' })),
    ],
    fallback: false,
  };
};