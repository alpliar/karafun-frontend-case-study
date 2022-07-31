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
import React, { FormEventHandler, useState } from 'react';
import { IFormField, IFormFields, IFormInformations } from '../models/form.model';

interface IFormFieldProps {
  fields: IFormFields;
  onChange: (form: IFormInformations) => void;
  onSubmit: () => void;
  submitLabel: string;
}

const FormFields: React.FC<IFormFieldProps> = ({ fields, onChange, onSubmit, submitLabel }) => {
  const { t } = useTranslation(['form', 'common']);
  const [infos, setInfos] = useState<IFormInformations>({
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = (name: IFormField['name'], value: string) => {
    const newInfos = {
      ...infos,
      [name]: value,
    };

    setInfos(newInfos);
    onChange(newInfos);
  };

  return (
    <Stack as="form" spacing={8} onSubmit={handleSubmit}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        {fields.map(({ label, name, type, helpText }) => {
          return (
            <FormControl isRequired key={name}>
              <FormLabel>{t(label)}</FormLabel>
              <Input type={type} onChange={(event) => handleChange(name, event.target.value)} />
              <FormHelperText>{t(helpText)}</FormHelperText>
            </FormControl>
          );
        })}
      </SimpleGrid>
      <Box>
        <Button type="submit" colorScheme="facebook" rounded="full">
          {submitLabel}
        </Button>
      </Box>
    </Stack>
  );
};

export default FormFields;
