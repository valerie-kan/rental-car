import * as Yup from "yup";

const emailRegexp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export const CarDetailsSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  date: Yup.string(),
  comment: Yup.string().max(100, "Comment must be no more than 100 symbols"),
});
