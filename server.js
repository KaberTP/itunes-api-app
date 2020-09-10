//Add requires for server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const fetch = require('isomorphic-fetch');
const bodyParser = require('body-parser');
const items = [];
const api = 'https://itunes.apple.com/search?term=';
const path = require("path");



//Add bodyPaser
  
  //app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(express.static(path.join(__dirname,'itunes-api-app/build')));

//POST - to Fecth from itunes api use req body to modify search 
app.post('/',(req,res)=> {
    fetch(`https://itunes.apple.com/search?term=${req.body.term}&country=ZA&media=${req.body.media}&limit=21`) 
        .then(res => res.json())
        .then(result => {
          res.json(result);
        });
  })
  if (process.env.NODE_ENV === "production"){
    app.use(express.static("itunes-api-app/build"));
  
    app.get('*',(req,res) =>{
      res.sendFile(path.resolve(__dirname, "itunes-api-app", "build", "index.html"));
    })
  } 

//IN PRODUCTION 

/*if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'itunes-api-app/build')));
  app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname,
  'itunes-api-app', 'build','index.html'));
  });
  }*/

//Add listener for api to use 8080 or given port 
app.listen(PORT, () =>{
    console.log(`Server is listening on Port ${PORT}`);
});