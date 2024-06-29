const express = require("express");

const app = express();
const port = 3000;

app.get("/route-handler", (req, res) => {
  res.send({
    name: "Shadman",
    age: "sada",
  });
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("App chal rha hai");
});
