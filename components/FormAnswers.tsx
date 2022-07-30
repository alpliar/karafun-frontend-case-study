import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { IFormAnswer } from '../models/form.model';

interface FormAnswersProps {
  answers: Array<IFormAnswer>;
  onChange: (value: string) => void;
}

const FormAnswers: React.FC<FormAnswersProps> = ({ answers, onChange }) => {
  const { t } = useTranslation(['form', 'common']);
  return (
    <RadioGroup onChange={onChange}>
      <Stack spacing={4}>
        {answers.map(({ value, text }) => {
          return (
            <Radio size="lg" key={value} value={value} colorScheme="orange">
              {t(text)}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default FormAnswers;
