export const validation = (values: any, err?:number) => {
  // console.log(values)
  let error: any = {};
  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (values.email == "") {
    error.email = "Email should not be empty";
  }
  if (!email_pattern.test(values.email)) {
    error.email = "Incorrect Format";
  }
  if (values.password == "") {
    error.password = "Password should not be empty";
  }

  return error;
};
