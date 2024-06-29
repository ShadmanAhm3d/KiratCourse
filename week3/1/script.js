//user input validation

const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

const schema = zod.array(zod.number());
app.post("/healthStatus", (req, res) => {
  //expecting an array
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "System hang",
    })
  }else{
    res.status(200).json({
      response
    })
  }
});

//global catches
/* app.use((err,req,res,next)=>{
  res.json({
    msg : "Some error has occured"
  })
}) */

app.listen(4000, () => {
  console.log("server started at 4000");
});
