const express = require("express");
const cors  = require("cors")

const app = express();
app.use(cors())

const todos = [
  {
    title: "GO TO SHIPPING",
    description: "shipping karne jaao",
    id: 1,
  },
  {
    description: "PEWMqweqeqweqewe karne jaao",
    title: "GO TO PEWMqweqeqweqewe",
    id: 2,
  },
  {
    title: "GO TO PEWMEW",
    description: "PEWMEW karne jaao",
    id: 3,
  },
  {
    title: "GO TO kungFU",
    description: "kungFU karne jaao",
    id: 4,
  },
  {
    title: "GO TO karate",
    description: "karate karne jaao",
    id: 5,
  },
];

app.get("/sumserver/randomTodo", (req, res) => {
  let randomIdx= Math.floor(Math.random() * todos.length)
  const randomTodo = todos[randomIdx]
  randomIdx=Math.floor(Math.random() * todos.length)
  const randomTodo2 = todos[randomIdx]
  const newArr = [{}];
  newArr.push(randomTodo,randomTodo2)
  res.send(newArr)
});

app.listen(3000, () => console.log("server started"));
