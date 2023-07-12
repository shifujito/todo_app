import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PostTodo, Todo } from '../types';
import TodoDetail from './todoDetail';
import AddTodoTitle from './addTodoTitle';

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

  const handleAddTodo = (newTodo: PostTodo) => {
    axios.post('http://localhost:8080/todos', newTodo).then((res) => {
      console.log(res);
      setTodoList([...todoList, res.data]);
    });
  };

  return (
    <>
      <ul>
        {todoList.map((todo: Todo) => (
          <TodoDetail key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodoTitle cardId={cardId} onAddTodo={handleAddTodo} />
    </>
  );
};

export default TaskCard;
