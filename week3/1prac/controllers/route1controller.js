const z = require("zod");
const express = require("express")


function test(obj) {
  const schema = z.object({
    email: z.string().email(),
    pass: z.string().min(5),
  });
  const res = schema.safeParse(obj);
  
  console.log(res);
  return res;
}


 const postHandler =  (req, res) => {
   const response =   test(req.body);
  if(!response.success){
    res.json("Not working")
  }else{
    res.json({
      msg: "greatSuccess"
    })
  }
}

 module.exports = {
  postHandler,
}
