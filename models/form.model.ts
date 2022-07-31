export interface IFormAnswer {
  text: string;
  value: string;
  isValidAnswer: boolean;
}

export type IFormAnswers = Array<IFormAnswer>;

export interface IFormField {
  label: string;
  name: 'firstName' | 'email' | 'lastName';
  helpText: string;
  type: string;
}

export type IFormFields = Array<IFormField>;

export interface IFormStep {
  id: number;
  isFinalStep: boolean;
  progression: number;
  title: string;
  titlePrefix: string | null;
  answers: IFormAnswers;
  fields: IFormFields;
  submitLabel: string;
}

export interface IFormInformations {
  firstName: string;
  lastName: string;
  email: string;
}
