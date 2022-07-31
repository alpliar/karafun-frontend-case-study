import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { FormEventHandler } from 'react';
import { IFormField, IFormFields, IFormInformations } from '../models/form.model';
import UiButton from './UiButton';

interface IFormFieldProps {
  fields: IFormFields;
  onChange: (form: IFormInformations) => void;
  onSubmit: () => void;
  submitLabel: string;
  infos: IFormInformations;
}

const FormFields: React.FC<IFormFieldProps> = ({ fields, onChange, onSubmit, submitLabel, infos }) => {
  const { t } = useTranslation(['form', 'common']);
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = (name: IFormField['name'], value: string) => {
    const newInfos = {
      ...infos,
      [name]: value,
    };

    onChange(newInfos);
  };

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        {fields.map(({ label, name, type, helpText }) => {
          return (
            <FormControl isRequired key={name}>
              <FormLabel>{t(label)}</FormLabel>
              <Input
                type={type}
                name={name}
                value={infos[name]}
                onChange={(event) => handleChange(name, event.target.value)}
              />
              <FormHelperText>{t(helpText)}</FormHelperText>
            </FormControl>
          );
        })}
      </SimpleGrid>
      <Box>
        <UiButton type="submit">{submitLabel}</UiButton>
      </Box>
    </Stack>
  );
};

export default FormFields;
