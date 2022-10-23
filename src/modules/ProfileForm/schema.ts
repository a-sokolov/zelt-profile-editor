import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    dateOfBirth: yup.date().max(new Date()).required(),
    phone: yup
      .string()
      .trim()
      .test('check-phone', (value) => {
        if (!value?.length) {
          return true;
        }
        return !!value.match(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/)?.length;
      }),
    email: yup.string().trim().email(),
  })
  .required();
