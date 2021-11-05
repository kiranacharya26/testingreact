import React, { useEffect, useState } from "react";
import axios from "axios";

const todos = () => {
  const [todos, setTodos] = useState();

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
  //     const resTodos = res.data;
  //     setTodos(resTodos);
  //   });
  // },[todos]);

  return (
    <div>
      <h1>Todo List</h1>
      {todos &&
        todos.map((todo) => {
          const { id, title } = todo;
          return (
            <div key={id}>
              <h3>{title}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default todos;
