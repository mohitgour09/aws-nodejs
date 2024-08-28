const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello task aws-nodejs" });
});




app.listen(8000,()=>{
    console.log('server is listening to port 8000')
})