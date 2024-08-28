const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello task aws-nodejs" });
});



app.get("/api/get_user_data", (req, res) => {
  res.send({ 
    use:{
        name:"mohit gour",
        age: 23,
        phone: 8770550853
    }
  });
});




app.listen(8000,()=>{
    console.log('server is listening to port 8000')
})