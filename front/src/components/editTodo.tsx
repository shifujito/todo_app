import axios from "axios";
import React, { useEffect, useState } from "react";
import { Todo } from "../types";

const EditTodo: React.FC = () => {
  const [data, setData] = useState<Todo | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todo", {
        /* リクエストボディ */
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>startDate: {data.startDate}</p>
          <p>endDate: {data.endDate}</p>
          <p>content: {data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditTodo;
