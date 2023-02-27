export const validation = (values: any) => {
  // console.log(values)
  let error: any = {};
  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (values.email == "") {
    error.email = "Email should not be empty";
  }
  if (!email_pattern.test(values.email)) {
    error.email = "Email is not Good";
  }

  if (values.password == "") {
    error.password = "Password should not be empty";
  }
  if (!password_pattern.test(values.password)) {
    error.password = "Password is not Good";
  }

  return error;
};
