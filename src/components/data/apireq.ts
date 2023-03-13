async function handleApi(auth: any) {
  let headersList = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
    "'Origin, X-Requested-With, Content-Type, Accept, access-control-allow-methods'",
  };
  let bodyContent = JSON.stringify({
    Username: auth.email,
    Password: auth.password,
  });
  let res = await fetch( "https://xw11vdxrsb.execute-api.us-east-2.amazonaws.com/natfstage/token", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
    
  })
    .then((response) => {
      console.log(response)
      return response.status;
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });

  return res;
}

export default handleApi;
