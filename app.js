const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//create server as app
const app = express();

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
   var firstName = req.body.fName;
   var lastName = req.body.lName;
   var email = req.body.email;

   //console.log(firstName,lastName, email);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

//API key
//5cc0f3620b58dd1777023c585148dbee-us21

//List ID
//66a6cf3548