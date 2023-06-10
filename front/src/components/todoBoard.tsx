import axios from "axios";
import React, { useEffect, useState } from "react";
import { Todo } from "../types";
import TodoDetail from "./todoDetail";

const TodoBoard: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todo", {
        /* リクエストボディ */
      })
      .then((response) => {
        console.log(response.data);
        setTodoList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <TodoDetail key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoBoard;
