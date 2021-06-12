import { IErrors } from "../interfaces/IError";
import { User } from "../models";
import { isEmpty } from "./isEmpty";
import { ISigninBody } from "../controllers/auth.controller";

export const validateSignUp = (
  data: User
): { isValid: boolean; errors: IErrors } => {
  const errors: IErrors = {};
  if (isEmpty(data.email)) {
    errors.email = "Enter your email";
  }
  if (isEmpty(data.name)) {
    errors.name = "Enter your name";
  }
  if (isEmpty(data.password)) {
    errors.password = "Enter your password";
  }

  return {
    isValid: isEmpty(errors),
    errors,
  };
};

export const validateSignin = (
  data: ISigninBody
): { isValid: boolean; errors: IErrors } => {
  const errors: IErrors = {};
  if (isEmpty(data.email)) {
    errors.email = "Enter your email";
  }

  if (isEmpty(data.password)) {
    errors.password = "Enter your password";
  }

  return {
    isValid: isEmpty(errors),
    errors,
  };
};
