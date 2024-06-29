import { useState } from "react";
import { Todos } from "./Todos";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: desc,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          const v = e.target.value;
          setTitle(v);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const v = e.target.value;
          setDesc(v);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo button
      </button>
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Refresh List again
      </button>
    </div>
  );
}
