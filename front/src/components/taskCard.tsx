import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Todo } from '../types';
import TodoDetail from './todoDetail';

type TaskCardProps = {
  cardId: number;
};

const TaskCard: React.FC<TaskCardProps> = ({ cardId }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/todos', {
        /* リクエストボディ */
      })
      .then((response) => {
        const todoList: Todo[] = response.data;
        setTodoList(todoList.filter((todo) => todo.cardId === cardId));
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

export default TaskCard;
