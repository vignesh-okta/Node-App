const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
// const options = {
//   key: fs.readFileSync('../../../Documents/Certs/localhost/privkey.pem'),
//   cert: fs.readFileSync('../../../Documents/Certs/localhost/cert.pem')
// };

app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/websterBank/websterBankCallback', function(req,res){
res.sendFile(path.join(__dirname+'/express/websterBankCallback.html'));
//__dirname : It will resolve to your project folder.
});
const server = https.createServer(app);
const port = 443;
server.listen(port);
console.debug('Server listening on port ' + port);
