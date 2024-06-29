const express = require("express");
const route1 = require("./routes/route1.js")

const app = express();

app.use(express.json());

app.get("/ds",(req,res)=>{
  res.send("SS");
})

app.post("/ds",route1);


app.listen(3000);
