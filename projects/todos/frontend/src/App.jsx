import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  //This is working

    fetch("http://localhost:3000/todo").then(async (res) => {
      const holder = await res.json();
      console.log(holder);
      setTodos(holder.todos);

      setTimeout(3999);
    });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
