const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types.js");

const { todo } = require("./db.js");

const app = express();
app.use(express.json());
app.use(cors());
//import zod validation ??

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong response",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    },
  );

  res.json({
    msg : "Todo has been marked as completed",
  })
});

app.listen(3000, () => {
  "server is running";
});
