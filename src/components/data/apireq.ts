async function handleApi(auth: any) {
  // let headersList = {
  //   "access-control-allow-headers":
  //     "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  //   "access-control-allow-methods": "GET,OPTIONS,POST",
  //   "access-control-allow-origin": "*",
  //   "content-type": "application/json",
  // };
  let bodyContent = JSON.stringify({
    Username: auth.email,
    Password: auth.password,
  });
  let res = await fetch(
    "https://xw11vdxrsb.execute-api.us-east-2.amazonaws.com/natfstage/token",
    {
      method: "POST",
      body: bodyContent,
      // headers: headersList,
    }
  )
    .then(async (response) => {
      let token = await response.text();
      let status = response.status;
      // console.log(token);
      return {status, token};
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });
  // console.log(res);
  return res;
}
export default handleApi;
