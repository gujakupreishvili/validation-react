import * as Yup from "yup";

export const validation = Yup.object({
  firstname: Yup.string().min(2).required("First Name cannot be empty"),
  lastname: Yup.string().min(2).required("Last Name cannot be empty"),
  email: Yup.string().min(2).required("Looks like this is not an email"),
  password: Yup.string().min(8).required("Password cannot be empty"),
});
