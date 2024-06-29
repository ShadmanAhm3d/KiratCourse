import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      desc: "GO to xyx",
      completed: false,
    },
    {
      title: "Go to Shopping",
      desc: "GO to xyxsss",
      completed: true,
    },
    {
      title: "Go to Shopping",
      desc: "GO to xyxsss",
      completed: true,
    }
  ]);

  function handleradd(){
    setTodos([...todos, {
      title : "new todo ",
      desc  : "the todo has been addded ",
      completed :true
    }])
  }
  return (
    <div>

      <button onClick={handleradd}>Add a new Todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} desc={todo.desc} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
}

export default App;
