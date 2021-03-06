import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Erros {
  const validationErrors: Erros = {};

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
