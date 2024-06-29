const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const url =
  "mongodb+srv://Shadman123:Shadman123@testcluster.07lhob2.mongodb.net/auth";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(url);
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (err) {
    console.log("Error Connection of db ");
  }
};
connectDB();

const Users = mongoose.model("Users", {
  username: String,
  password: String,
  firstName: String,
});

app.post("/signup", async function (req, res) {
  try {
    const data = await Users.create(req.body);
    console.log("Data added \n");
    console.log(data);
    res.json({
      data: data,
    });
  } catch (err) {
    console.log("ERROR : ", err);
    res.json({
      msg: " Some error has occured in post handler",
    });
  }
});



const userExists = async (username)=>{
  //TODO :search that person in the db ? 
   try {
    const res  = await Users.find({username : username}).exec()
    if(res) return true;
  }catch(err){
    console.log("User does not exist")
    return false;
  }

}


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username)) {
    res.status(403).json({
      msg: "User does not exists ",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    //verify
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    console.log(username);

    const data = await Users.find();
    console.log(data);
    res.json({
      status: "Sucess",
      result: 1,
      data: {
        pew: data,
      },
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Wrong Info",
    });
  }
});

app.listen(5555);
