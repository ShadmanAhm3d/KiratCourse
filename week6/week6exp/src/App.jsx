import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
    .then((res)=>{
        res = res.json();
      }).then((data)=>{
        setTodos(data);
      })
  }, []);

  return (
    <>
      <CardComponent todos={todos} />
    </>
  );
}

function CardComponent({todos}) {
    <div>
    <h3> {todos.id}</h3>
    <p>{todos.todo}</p>
    </div>
}

export default App;

