/**
 *
 * validators
 *
 *  */

export const validate = (values: any) => {
  const errors: any = {};

  switch (true) {
    case !values.title:
      errors.title = 'Required';
      break;
    case !values.name:
      errors.name = 'Required';
      break;
    case !values.email:
      errors.email = 'Required';
      break;
    case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email):
      errors.email = 'Not a valid email.';
      break;
    case !values.companyName:
      errors.companyName = 'Required';
      break;
    case !values.message:
      errors.message = 'Required';
      break;
    default:
  }

  return errors;
};

export default validate;
