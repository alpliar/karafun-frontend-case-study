export interface IFormAnswer {
  text: string;
  value: string;
  isValidAnswer: boolean;
}

export type IFormAnswers = Array<IFormAnswer>;

export interface IFormField {
  label: string;
  name: string;
  helpText: string;
  type: string;
}

export type IFormFields = Array<IFormField>;

export interface IFormStep {
  id: number;
  isFinalStep: boolean;
  progression: number;
  title: string;
  pretitle: string | null;
  answers: IFormAnswers;
  fields: IFormFields;
  submitLabel: string;
}
