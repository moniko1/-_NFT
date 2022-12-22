const ipfsClient = require('ipfs-http-client');
const multipart = require("parse-multipart");
const project = "2Ii0RnHjJY6OYi33gHUl6d7Fz7f" + ":" + "ec6990a58f8213aeb0fd72089fa0073d";
const auth = 'Basic ' + Buffer.from(project).toString('base64');
const client = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
      authorization: auth,
  },
});
const getFiles = function (parts) {
  const files = [];
  parts.forEach((part) => {
    const buffer = part.data
    const fileFullName = part.filename;
    files.push({name: fileFullName,data:buffer})
  });
  return files
};
// const ipfshash = async function(buffer){
//   const result = await client.add(buffer);
//   return result;
// }

exports.handler = async function (event, context) {
  console.log(event);
  let bodyBuffer = Buffer.from(event['body-json'], 'base64');
  console.log(event.params.header["content-type"]);
  const boundary = multipart.getBoundary(event.params.header["content-type"]);
  const parts = multipart.Parse(bodyBuffer, boundary);
  console.log(parts);
  const files = getFiles(parts);
  console.log(files);
  let iphash = 0;
  await client.add({path:files[0].name,content:files[0].data})
  .then((result)=>{
    console.log(result);
    console.log(result.cid)
    iphash = result.cid.toString();
  })

  const response = {
    statusCode: 200,
    body: {cid:iphash},
  };
  return response;
};