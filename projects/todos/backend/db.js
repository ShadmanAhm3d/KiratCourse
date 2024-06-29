const mongoose = require("mongoose")

const url = "mongodb+srv://Shaddy:Shadman123@cluster0.57iow7s.mongodb.net/ShadmanTodo";

mongoose.connect(url);

const todoSchema = mongoose.Schema({
  title : String,
  description : String,
  completed : Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo : todo,
}
