import * as yup from 'yup';

export const examValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
