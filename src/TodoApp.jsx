import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

/* LA IDEA ES QUE ESTE CUSTOM HOOK QUE CREEAMOS CON RTK QUERY TRABAJE CON REDUX, ES DECIR QUE DISPARE ACCIONES, QUE MODIFIQUE ESTADOS ETC */

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //const { data: todos = [], isLoading } = useGetTodosQuery(); // AQUI LE CAMBIAMOS EL NOMBRE A LO QUE DESESTRUCTURAMOS, YA NO SE VA A LLAMAR DATA SINO: TODOS
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>

      {/*      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <strong>{todo.completed ? "done" : "pendding"}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
