async function handleApi(auth: any) {
  let headersList = {
    "access-control-allow-headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "access-control-allow-methods": "GET,OPTIONS,POST",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
  };
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
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });
  return res;
}
export default handleApi;
