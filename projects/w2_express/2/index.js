//creating a http server using express
const express = require("express");

const app = express();

const users = [
  {
    name: "John",
    kidney: [
      {
        health: true,
      },
    ],
  },
];
//This is a middleware
app.use(express.json());

app.get("/", (req, res) => {
  const kidneyStatus = users[0].kidney;
  const totalNumberofKidney = kidneyStatus.length;
  let NumberOfHealthyKidneys = 0;
  for (let i = 0; i < totalNumberofKidney; i++) {
    if (kidneyStatus[i].health) {
      NumberOfHealthyKidneys = NumberOfHealthyKidneys + 1;
    }
  }

  let numberOfUnhealthyKidneys = totalNumberofKidney - NumberOfHealthyKidneys;

  res.json({
    totalNumberofKidney,
    NumberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  // user can add a unHealthy Kidney
  const isHealthy = req.body.isHealty;
  users[0].kidney.push({
    health: isHealthy,
  });

  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].health = true;
  }

  res.json({});
});

app.delete("/", (req, res) => {
  const newArr = [];

  for (let i = 0; i < users[0].kidney.length; i++) {
    if (users[0].kidney[i]) {
      newArr.push({
        health: true,
      });
    }
  }
  users[0].kidney = newArr;
  res.json({ msg: "Done delete" });
});

app.listen(3000);
