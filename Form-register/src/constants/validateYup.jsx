import * as Yup from "yup";
import { MESSAGES } from "./messages";

export const schema = Yup.object({
  username: Yup.string()
    .required(MESSAGES.USENAME)
    .min(2, MESSAGES.MIN_LENGTH_2),
  password: Yup.string()
    .required(MESSAGES.PASSWORD)
    .min(8, MESSAGES.MIN_LENGTH_8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      MESSAGES.PASSWORD_VALIDATE
    ),
  email: Yup.string().email(MESSAGES.EMAIL_VALIDATE).required(MESSAGES.EMAIL),
  gender: Yup.string()
    .required(MESSAGES.GENDER)
    .oneOf(["male", "female"], "Can only choose male or female"),
  job: Yup.string().required().oneOf(["fe", "be", "fs"]),
  terms: Yup.boolean().oneOf([true], MESSAGES.TERMS),
});
