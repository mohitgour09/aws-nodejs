const express = require("express");
const app = express();
require("dotenv").config;

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello task aws-nodejs" });
});



app.get("/api/get_user_data", (req, res) => {
  res.send({ 
    use:{
        name:"mohit gour",
        age: 23,
        phone: 8770550853
    },env:process.env.NAME
  });
});




app.listen(process.env.PORT,()=>{
    console.log('server is listening to port 8000')
})