import { Input, Flex, Center, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { PostTodo } from '../types';

type AddTodoTitleProps = {
  cardId: number;
  onAddTodo: (newTodo: PostTodo) => void;
};

const AddTodoTitle: React.FC<AddTodoTitleProps> = ({ cardId, onAddTodo }) => {
  const [todo, setTodo] = useState<string>('');
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    const newTodo: PostTodo = {
      title: todo,
      cardId: cardId,
    };

    onAddTodo(newTodo);
    setTodo('');
  };

  return (
    <Flex>
      <Center>
        <Input
          placeholder="TODOを入力してください"
          value={todo}
          onChange={handelInput}
        />
        <Button colorScheme="blue" onClick={handleAddTodo}>
          追加
        </Button>
      </Center>
    </Flex>
  );
};

export default AddTodoTitle;
