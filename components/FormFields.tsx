import { FormControl, FormHelperText, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { IFormFields } from '../models/form.model';

interface IFormFieldProps {
  fields: IFormFields;
}

const FormFields: React.FC<IFormFieldProps> = ({ fields }) => {
  const { t } = useTranslation(['form', 'common']);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {fields.map(({ label, name, type, helpText }) => {
        return (
          <FormControl key={name}>
            <FormLabel>{t(label)}</FormLabel>
            <Input type={type} />
            <FormHelperText>{t(helpText)}</FormHelperText>
          </FormControl>
        );
      })}
    </SimpleGrid>
  );
};

export default FormFields;
