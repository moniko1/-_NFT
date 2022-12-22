var express = require('express');
var app = express();
const multer = require("multer");
const upload = multer({})
const ipfsClient = require('ipfs-http-client');
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
// http://localhost:3000/api/getList 에 컨트롤러 매핑
app.get('/api/getList', function(req, res) {
    res.send('api getList');
  });
app.post('/api/upload',upload.single('image'),(req,res)=>{
  client.add({path:req.file.originalname,content:req.file.buffer}).then((res) => {
    console.log(res);
  });
  console.log(req.file)
  res.send(req.file.originalname);
});

app.listen(3000);
