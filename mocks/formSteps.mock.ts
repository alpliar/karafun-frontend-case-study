import { IFormStep } from '../models/form.model';

const formSteps: Array<IFormStep> = [
  {
    id: 1,
    isFinalStep: false,
    progression: 15,
    pretitle: null,
    title: 'form:step1.title',
    answers: [
      {
        text: 'form:step1.answers.karaoke',
        value: 'karaoke',
        isValidAnswer: true,
      },
      {
        text: 'form:step1.answers.complex',
        value: 'complex',
        isValidAnswer: true,
      },
      {
        text: 'form:step1.answers.hospitality',
        value: 'hospitality',
        isValidAnswer: true,
      },
      {
        text: 'form:step1.answers.camping',
        value: 'camping',
        isValidAnswer: false,
      },
      {
        text: 'form:step1.answers.rental',
        value: 'rental',
        isValidAnswer: false,
      },
      {
        text: `form:step1.answers.dj`,
        value: 'dj',
        isValidAnswer: false,
      },
      {
        text: 'form:step1.answers.other',
        value: 'other',
        isValidAnswer: false,
      },
    ],
    submitLabel: `form:step1.submitLabel`,
    fields: [],
  },
  {
    id: 2,
    isFinalStep: false,
    progression: 50,
    pretitle: null,
    title: 'form:step2.title',
    answers: [
      {
        text: 'form:step2.answers.morethan6months',
        value: 'morethan6months',
        isValidAnswer: true,
      },
      {
        text: 'form:step2.answers.3to6months',
        value: '3to6months',
        isValidAnswer: true,
      },
      {
        text: 'form:step2.answers.lessthan3months',
        value: 'lessthan3months',
        isValidAnswer: true,
      },
      {
        text: 'form:step2.answers.opened',
        value: 'opened',
        isValidAnswer: true,
      },
    ],
    submitLabel: 'form:step2.submitLabel',
    fields: [],
  },
  {
    id: 3,
    isFinalStep: true,
    progression: 85,
    pretitle: 'form:step3.pretitle',
    title: 'form:step3.title',
    answers: [],
    submitLabel: 'form:step3.submitLabel',
    fields: [
      {
        label: 'form:step3.fields.firstName',
        name: 'firstName',
        helpText: 'form:step3.fields.firstNameHelperText',
        type: 'text',
      },
      {
        label: 'form:step3.fields.lastName',
        name: 'lastName',
        helpText: 'form:step3.fields.lastNameHelperText',
        type: 'text',
      },
      {
        label: 'form:step3.fields.email',
        name: 'email',
        helpText: 'form:step3.field.emailHelperText',
        type: 'email',
      },
    ],
  },
];

export default formSteps;
